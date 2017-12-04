start = (elem / text)+

any = .
ws 'whitespace' = [\n\r\t ]

doubleQuote = '"'
singleQuote = "'"

string = doubleQuote text:$doubleQuoteCharacter* doubleQuote {
  const node =  {
    type: 'string',
    subtype: 'single',
    value: text,
	};

  if (options.location === true) {
    node.location = location();
  }

  return node;
} / singleQuote text:$singleQuoteCharacter* singleQuote {
	const node = {
    type: 'string',
    subtype: 'double',
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
escapeSequence =
  escapeCharacter sequence:(
    doubleQuote /
    singleQuote /
    '\\' /
    '/' /
    'b' { return '\b'; } /
    'f' { return '\f'; } /
    'n' { return '\n'; } /
    'r' { return '\r'; } /
    't' { return '\t'; } /
    'u' digits:$(HEXDIG HEXDIG HEXDIG HEXDIG) {
      return String.fromCharCode(parseInt(digits, 16));
    }
  )
{
  return sequence;
}

unescaped = [\x20-\x21\x23-\x5B\x5D-\u10FFFF]
escapeCharacter = '\\'

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
	= '<script' attrs:scriptOrStyleAttrs '>' 
    contents:(!'</script>' any)*
    '</script' ws* elemCloseChar
{
  const node = {
    type: 'element',
    tagName: 'script',
    attributes: attrs,
    children: [
      contents,
    ],
  };

  if (typeof options.javascriptParser === 'function') {
    node.children[0] = options.javascriptParser(contents);
  }

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

style
	= '<style' attrs:scriptOrStyleAttrs '>' 
    contents:$(!'</style>' any)*
    '</style' ws* elemCloseChar
{
  const node = {
    type: 'element',
    tagName: 'style',
    attributes: attrs,
    children: [
      contents,
    ],
  };

  if (typeof options.cssParser === 'function') {
    node.children[0] = options.cssParser(contents);
  }

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

scriptOrStyleAttrs
	= attrs:(ws+ attrs:elemAttr* { return attrs; })* {
    	return attrs;
  }

singleTagElement 'voidElement'
	= elemOpenChar tagName:elemTag ws* attrs:elemAttr* '/'? ws* elemCloseChar
{
  if (typeof options.voidElements === 'object' &&
    options.voidElements &&
    !options.voidElements[tagName.toLowerCase()])
  {
    const loc = location();
    throw new Error('A invalid single tag/void element was found at line ' +
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
    type: 'element',
    tagName: tagName,
    attributes: attrs,
    children,
  };

  if (options.location === true) {
    node.location = location();
  }

  return node;
}

elemOpenChar 'elementOpeningCharacter' = '<'
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

  return node;
}

elemAttrKey 'elementAttributeKey' = $elemKey
elemAttrValue 'elementAttributeValue' = string
elemOpen = elemOpenChar elemTag ws* elemAttr* elemCloseChar
elemContents = (elem / comment / text)*
elemClose = elemOpenChar '/' elemTag ws* elemCloseChar

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

HEXDIG = [0-9a-f]i

text = characters:$(!(elemOpenChar ('/' / elemKeyChar)) any)+ {
	return characters;
}