start = allGlobalTypes*

allGlobalTypes = linkLiteral / comment / elem / invocation / variable / text

any = .
ws 'whitespace' = [\n\r\t ]
comma = ','
number = val:(([0-9]* '.' [0-9]+) / [0-9]+)
{
  const node = {
    type: 'number',
    value: Number(val),
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

doubleQuote = '"'
singleQuote = "'"

string = doubleQuote text:$doubleQuoteCharacter* doubleQuote
{
  const node = {
    type: 'string',
    subtype: 'doubleQuote',
    value: text,
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
} / singleQuote text:$singleQuoteCharacter* singleQuote
{
  const node = {
    type: 'string',
    subtype: 'singleQuote',
    value: text,
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

bareString
  = text:$invokeNameChar+
{
  const node = {
    type: 'string',
    subtype: 'bare',
    value: text,
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

doubleQuoteCharacter = !doubleQuote c:strChar {
  return c;
}

singleQuoteCharacter = !singleQuote c:strChar {
  return c;
}

strChar 'character' = escapeSequence / unescaped
escapeSequence = escapeCharacter sequence:(
  doubleQuote /
  singleQuote /
  "\\" /
  "/" /
  "b" { return '\b'; } /
  "f" { return '\f'; } /
  "n" { return '\n'; } /
  "r" { return '\r'; } /
  "t" { return '\t'; } /
  "u" digits:$(HEXDIG HEXDIG HEXDIG HEXDIG)
  {
    return String.fromCharCode(parseInt(digits, 16));
  })
{
  return sequence;
}

unescaped = [\x20-\x21\x23-\x5B\x5D-\u10FFFF]
escapeCharacter = "\\"
HEXDIG = [0-9a-f]i

invokeNameChar = [^\n\r\t <>/$,=|:]

linkLiteral
  = linkOpen
    linkContents:linkContents
    linkClose
{
  const type = 'link';
  const leftArrowIndex = linkContents.indexOf('<-');
  const rightArrowIndex = linkContents.lastIndexOf('->');
  const barIndex = linkContents.indexOf('|');
  const numFound = Number(leftArrowIndex !== -1) +
                   Number(rightArrowIndex !== -1) +
                   Number(barIndex !== -1);
              
  if (numFound > 1) {
    throw new Error('More than one link delimiter found. ' +
              'You can use as many instances of one ' +
                      'of the following: ->, <-, |.');
  } else if (rightArrowIndex !== -1 &&
    (leftArrowIndex === -1 ||
      linkContents.length - rightArrowIndex <= leftArrowIndex))
  {
    const node = {
      type,
      subtype: 'twoPartRightArrow',
      passageName: linkContents.slice(rightArrowIndex + 2),
      children: peg$parse(linkContents.slice(0, rightArrowIndex)),
    };

    if (options.location === true) {
      node.location = location();
    }

    return node;    
  } else if (leftArrowIndex !== -1 &&
    (rightArrowIndex === -1 ||
        leftArrowIndex < linkContents.length - rightArrowIndex))
  {
    const offset = leftArrowIndex + 2;
    let children;
    try {
      children = peg$parse(linkContents.slice(offset));
    } catch (e) {
      const thisLoc = location();
      const errLoc = e.location;
      const str =
        `${e.message} \nAt line ` +
        `${errLoc.start.line + thisLoc.start.line - 1}, ` +
        `column ${offset + thisLoc.start.column + errLoc.start.column}.`;

      throw new Error(str);
    }

    const node = {
      type,
      subtype: 'twoPartLeftArrow',
      passageName: linkContents.slice(0, leftArrowIndex),
      children,
    };

    if (options.location === true) {
      node.location = location();
    }

    return node;
  } else if (barIndex !== -1) {
    let children;
    try {
      children = peg$parse(linkContents.slice(0, barIndex));
    } catch (e) {
      const thisLoc = location();
      const errLoc = e.location;
      const str =
        `${e.message} \nAt line ` +
        `${errLoc.start.line + thisLoc.start.line - 1}, ` +
        `column ${offset + thisLoc.start.column + errLoc.start.column}.`;

      throw new Error(str);
    }
    
    const node = {
      type,
      subtype: 'twoPartBar',
      passageName: linkContents.slice(barIndex + 1),
      children,
    };

    if (options.location === true) {
      node.location = location();
    }

    return node;
  } else {
    const node = {
      type,
      subtype: 'onePart',
      passageName: linkContents,
      children: [],
    };

    if (options.location === true) {
      node.location = location();
    }

    return node;
  }
}

linkContents = $linkChar+

linkChar = [^\]]
linkOpen = '[['
linkClose = ']]'
    
linkTextItem
  = comment /
    elem /
    variable /
    invocation /
    text:$(!linkTextEnder any)+

linkTextEnder = '->' / '|' / ']' / '<' elemKeyChar
passageNameChar = [^\]]

comment = commentOpen $value:(!'-->' val:any { return val; })* commentClose {
  const node = {
    type: 'comment',
    value,
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

commentOpen = '<!--'
commentClose = '-->'

elem = elem:(script / style / doubleTagElement / singleTagElement)
{
  const tagName = elem.tagName;
	if (tagName === 'tw-link') {
    elem.passageName = '___ERROR_NO_PASSAGE-NAME_ATTRIBUTE';
    elem.type = 'link';
    elem.subtype = 'linkElement';
    for (let ii = 0; ii < elem.attributes.length; ii += 1) {
      const attr = elem.attributes[ii];
      if (attr.key === 'passage-name') {
        elem.passageName = attr.value;
        break;
      }
    }
  } else if (tagName === 'tw-invocation') {
    elem.type = 'invocation';
    elem.subtype = 'invocationElement';
    elem.arguments = elem.children.filter((child) => {
      return child.tagName === 'tw-argument';
    });

    elem.children = elem.children.filter((child) => {
      return child.tagName !== 'tw-argument';
    });
  } else if (tagName === 'tw-invocation-body') {
    elem.type = 'invocationBody';
    elem.subtype = 'invocationBodyElement';
  } else if (elem.tagName === 'tw-number') {
    elem.type = 'number';
    elem.subtype = 'numberElement';
    elem.value = elem.children[0];
    elem.children = [];
  } else if (tagName === 'tw-string') {
    elem.type = 'string';
    elem.subtype = 'stringElement';
    elem.value = elem.children[0];
    elem.children = [];
  } else if (elem.tagName === 'tw-reserved-word') {
    elem.type = 'reservedWord';
    elem.subtype = '___ERROR_NO_DATA-SUBTYPE_ATTRIBUTE';
    for (let ii = 0; ii < elem.attributes.length; ii += 1) {
      const attr = elem.attributes[ii];
      if (attr.key === 'data-subtype') {
        elem.subtype = attr.value;
        break;
      }
    }

    elem.source = '___ERROR_NO_DATA-SOURCE_ATTRIBUTE';
    for (let ii = 0; ii < elem.attributes.length; ii += 1) {
      const attr = elem.attributes[ii];
      if (attr.key === 'data-source') {
        elem.source = attr.value;
        break;
      }
    }
  }
    
  return elem;
}
   
script
  = '<script' attributes:scriptOrStyleAttrs '>' 
    contents:(!'</script>' any)*
    '</script' ws* elemCloseChar
{
  const node = {
    type: 'element',
    subtype: 'script',
    tagName: 'script',
    source: contents,
    attributes,
    children: [ contents, ],
  };

  if (options.javascriptParse === 'function') {
    node.children[0] = options.javascriptParse(contents);
  }

  return node;
}

style
  = '<style' attributes:scriptOrStyleAttrs '>' 
    contents:$(!'</style>' any)*
    '</style' ws* elemCloseChar
{
  const node = {
    type: 'element',
    subtype: 'style',
    tagName: 'style',
    source: contents,
    attributes,
    children: [ contents, ],
  };

  if (options.cssParse === 'function') {
    node.children[0] = options.cssParse(contents);
  }

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

scriptOrStyleAttrs
  = attrs:(ws+ attrs:elemAttr* { return attrs; })*
{
  return attrs;
}

singleTagElement 'voidElement'
  = elemOpenChar tagName:elemTag ws* attrs:elemAttr* '/'? ws* elemCloseChar
{
  if (typeof options.voidElements === 'object' &&
    options.voidElements &&
    !voidElements[tagName.toLowerCase()])
  {
    const loc = location();
    throw new Error('A single tag/void element was found at line ' +
                    `${loc.start.line}, column ${loc.start.column}.`);
  }

  const node = {
    type: 'element',
    tagName,
    attributes: attrs,
    children: [],
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

doubleTagElement 'elementWithTwoTags'
  /* <span></span>
     *     <            span               foo="bar"          >                 whatever         </span>   
     */
  = elemOpenChar tagName:elemTag ws* attrs:elemAttr* ws* elemCloseChar children:elemContents elemClose
{
  const node = {
    children,
    type: 'element',
    tagName,
    attributes: attrs,
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

elemOpenChar 'elementOpeningCharacter' = (!'<-' '<')
elemCloseChar 'elementClosingCharacter' = '>'
elemKey 'elementTagNameOrAttributeKey' = $elemKeyChar+
elemKeyChar 'Element key character' = (!'>' [a-zA-Z\-]+)
elemTag 'elementTagName' = elemKey
elemAttr 'elementAttribute'
  = key:elemAttrKey
  attrValue:('=' value:elemAttrValue ws* { return value; })? ws*
{
  const node = {
    type: 'elementAttribute',
    key,
    value: (attrValue || {}).value || '',
  };

  if (options.location === true) {
    node.location = location();
  }
}

elemAttrKey 'elementAttributeKey' = $elemKey
elemAttrValue 'elementAttributeValue' = string
elemOpen = elemOpenChar elemTag ws* elemAttr* elemCloseChar
elemContents = allGlobalTypes*
elemClose = elemOpenChar '/' elemTag ws* elemCloseChar

invokeOpen 'invocationOpen' = '<<'
invokeClose 'invocationClose' = '>>'

invokeName = $invokeNameChar+

variableOpen 'variableOpener' = "$"
variable = variableOpen varName:$invokeNameChar+
{
  const node = {
    type: 'variable',
    name: varName,
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

reservedWord
  = additionAndConcatenationWord / 
    subtractionWord /
    multiplicationWord /
    divisionWord /
    moduloWord /
    assignmentWord /
    assignmentAdderWord /
    assignmentSubtractorWord /
    assignmentMultiplierWord /
    assignmentDividerWord /
    assignmentModuloWord /
    lastReferencedVariableWord /
    naiveEqualityWord /
    naiveNonEqualityWord /
    exactEqualityWord /
    exactNonEqualityWord

additionAndConcatenationWord = source:('plus' / '+') {
  const node = {
    type: 'reservedWord',
    subtype: 'additionAndConcatenationWord',
    source,
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

subtractionWord = source:('minus' / '-') {
  const node = {
    type: 'reservedWord',
    subtype: 'subtractionWord',
    source,
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

multiplicationWord = source:('times' / '*') {
  const node = {
    type: 'reservedWord',
    subtype: 'multiplicationWord',
    source,
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

divisionWord = source:('dividedby' / 'divided-by' / '/') {
  const node = {
    type: 'reservedWord',
    subtype: 'divisionWord',
    source,
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

moduloWord = source:('modulo' / '%') {
  const node = {
    type: 'reservedWord',
    subtype: 'moduloWord',
    source,
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

assignmentWord = source:('=' / 'to') {
  const node = {
    type: 'reservedWord',
    subtype: 'assignmentWord',
    source,
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

assignmentAdderWord = source:('plusequals' / 'plus-equals' / '+=') {
  const node = {
    type: 'reservedWord',
    subtype: 'assignmentAdderWord',
    source,
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

assignmentSubtractorWord = source:('minusequals' / 'minus-equals' / '-=') {
  const node = {
    type: 'reservedWord',
    subtype: 'assignmentSubtractorWord',
    source,
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

assignmentMultiplierWord = source:('timesequals' / 'times-equals' / '*=') {
  const node = {
    type: 'reservedWord',
    subtype: 'assignmentMultiplierWord',
    source,
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

assignmentDividerWord = source:('divideequals' / 'divide-equals' / '/=') {
  const node = {
    type: 'reservedWord',
    subtype: 'assignmentDividerWord',
    source,
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

assignmentModuloWord = source:('moduloequals' / 'modulo-equals' / '%=') {
  const node = {
    type: 'reservedWord',
    subtype: 'assignmentModuloWord',
    source,
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

lastReferencedVariableWord = source:('it') {
  const node = {
    type: 'reservedWord',
    subtype: 'lastReferencedVariableWord',
    source,
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

naiveEqualityWord = source:('eq' / '==') {
  const node = {
    type: 'reservedWord',
    subtype: 'naiveEqualityWord',
    source,
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

naiveNonEqualityWord = source:('neq' / '!=') {
  const node = {
    type: 'reservedWord',
    subtype: 'naiveNonEqualityWord',
    source,
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

exactEqualityWord = source:('is' / '===') {
  const node = {
    type: 'reservedWord',
    subtype: 'exactEqualityWord',
    source,
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

exactNonEqualityWord = source:('isnot' / 'is-not' / '!==') {
  const node = {
    type: 'reservedWord',
    subtype: 'exactNonEqualityWord',
    source,
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

arg 'argument'
  = value:(invocation / string / number / variable / reservedWord / bareString)
    (ws* comma ws* / ws+)?
{
  const arg = {
    type: 'argument',
    value,
  };

  if (options.location === true) {
    options.location = location();
  }

  return arg;
}

invocation = withBodyInvocation / withoutBodyInvocation

withoutBodyInvocation
  = invokeOpen invokeName:invokeName ws* args:arg* invokeClose
{
  const node = {
    type: 'invocation',
    subtype: 'withoutBody',
    name: invokeName,
    arguments: args,
    children: [],
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

withBodyInvocation
  /* <<foo bar "baz", 'bux' 2>>whatever<</foo>>
     * <<foo bar "baz", 'bux' 2>>     whatever      <<        / | end      foo      >>
     */
  = invoke:withoutBodyInvocation body:(children:allGlobalTypes* invokeOpen ('/' / 'end') invokeName invokeClose {
    const node = {
      type:    'invocationBody',
      subtype: 'inner',
      children,
    };

    if (options.location === true) {
      node.location = location();
    }

    return node;
  })
{
  const node = {
    type: 'invocation',
    subtype: 'withBody',
    functionName: invoke.name,
    arguments: invoke.arguments,
    children: [ body, ],
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

text = characters:$(!(invokeOpen / linkOpen / elemOpenChar ('/' / elemKeyChar) / variableOpen) any)+ {
  return characters;
}