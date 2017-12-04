function peg$subclass(child, parent) {
    function C() { this.constructor = child; }
    C.prototype = parent.prototype;
    child.prototype = new C();
}
function peg$SyntaxError(message, expected, found, location) {
    this.message = message;
    this.expected = expected;
    this.found = found;
    this.location = location;
    this.name = "SyntaxError";
    if (typeof Error.captureStackTrace === "function") {
        Error.captureStackTrace(this, peg$SyntaxError);
    }
}
peg$subclass(peg$SyntaxError, Error);
peg$SyntaxError.buildMessage = function (expected, found) {
    var DESCRIBE_EXPECTATION_FNS = {
        literal: function (expectation) {
            return "\"" + literalEscape(expectation.text) + "\"";
        },
        class: function (expectation) {
            var escapedParts = expectation.parts.map(function (part) {
                return Array.isArray(part)
                    ? classEscape(part[0]) + "-" + classEscape(part[1])
                    : classEscape(part);
            });
            return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },
        any: function () {
            return "any character";
        },
        end: function () {
            return "end of input";
        },
        other: function (expectation) {
            return expectation.description;
        }
    };
    function hex(ch) {
        return ch.charCodeAt(0).toString(16).toUpperCase();
    }
    function literalEscape(s) {
        return s
            .replace(/\\/g, "\\\\")
            .replace(/"/g, "\\\"")
            .replace(/\0/g, "\\0")
            .replace(/\t/g, "\\t")
            .replace(/\n/g, "\\n")
            .replace(/\r/g, "\\r")
            .replace(/[\x00-\x0F]/g, function (ch) { return "\\x0" + hex(ch); })
            .replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) { return "\\x" + hex(ch); });
    }
    function classEscape(s) {
        return s
            .replace(/\\/g, "\\\\")
            .replace(/\]/g, "\\]")
            .replace(/\^/g, "\\^")
            .replace(/-/g, "\\-")
            .replace(/\0/g, "\\0")
            .replace(/\t/g, "\\t")
            .replace(/\n/g, "\\n")
            .replace(/\r/g, "\\r")
            .replace(/[\x00-\x0F]/g, function (ch) { return "\\x0" + hex(ch); })
            .replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) { return "\\x" + hex(ch); });
    }
    function describeExpectation(expectation) {
        return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
    }
    function describeExpected(expected) {
        var descriptions = expected.map(describeExpectation);
        var i, j;
        descriptions.sort();
        if (descriptions.length > 0) {
            for (i = 1, j = 1; i < descriptions.length; i++) {
                if (descriptions[i - 1] !== descriptions[i]) {
                    descriptions[j] = descriptions[i];
                    j++;
                }
            }
            descriptions.length = j;
        }
        switch (descriptions.length) {
            case 1:
                return descriptions[0];
            case 2:
                return descriptions[0] + " or " + descriptions[1];
            default:
                return descriptions.slice(0, -1).join(", ")
                    + ", or "
                    + descriptions[descriptions.length - 1];
        }
    }
    function describeFound(found) {
        return found ? "\"" + literalEscape(found) + "\"" : "end of input";
    }
    return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};
function peg$parse(input, options) {
    options = options !== undefined ? options : {};
    var peg$FAILED = {};
    var peg$startRuleFunctions = { start: peg$parsestart };
    var peg$startRuleFunction = peg$parsestart;
    var peg$c0 = peg$anyExpectation();
    var peg$c1 = peg$otherExpectation("whitespace");
    var peg$c2 = /^[\n\r\t ]/;
    var peg$c3 = peg$classExpectation(["\n", "\r", "\t", " "], false, false);
    var peg$c4 = ",";
    var peg$c5 = peg$literalExpectation(",", false);
    var peg$c6 = /^[0-9]/;
    var peg$c7 = peg$classExpectation([["0", "9"]], false, false);
    var peg$c8 = ".";
    var peg$c9 = peg$literalExpectation(".", false);
    var peg$c10 = function (val) {
        const node = {
            type: 'number',
            value: Number(val),
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c11 = "\"";
    var peg$c12 = peg$literalExpectation("\"", false);
    var peg$c13 = "'";
    var peg$c14 = peg$literalExpectation("'", false);
    var peg$c15 = function (text) {
        const node = {
            type: 'string',
            subtype: 'doubleQuote',
            value: text,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c16 = function (text) {
        const node = {
            type: 'string',
            subtype: 'singleQuote',
            value: text,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c17 = function (text) {
        const node = {
            type: 'string',
            subtype: 'bare',
            value: text,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c18 = function (c) {
        return c;
    };
    var peg$c19 = peg$otherExpectation("character");
    var peg$c20 = "\\";
    var peg$c21 = peg$literalExpectation("\\", false);
    var peg$c22 = "/";
    var peg$c23 = peg$literalExpectation("/", false);
    var peg$c24 = "b";
    var peg$c25 = peg$literalExpectation("b", false);
    var peg$c26 = function () { return '\b'; };
    var peg$c27 = "f";
    var peg$c28 = peg$literalExpectation("f", false);
    var peg$c29 = function () { return '\f'; };
    var peg$c30 = "n";
    var peg$c31 = peg$literalExpectation("n", false);
    var peg$c32 = function () { return '\n'; };
    var peg$c33 = "r";
    var peg$c34 = peg$literalExpectation("r", false);
    var peg$c35 = function () { return '\r'; };
    var peg$c36 = "t";
    var peg$c37 = peg$literalExpectation("t", false);
    var peg$c38 = function () { return '\t'; };
    var peg$c39 = "u";
    var peg$c40 = peg$literalExpectation("u", false);
    var peg$c41 = function (digits) {
        return String.fromCharCode(parseInt(digits, 16));
    };
    var peg$c42 = function (sequence) {
        return sequence;
    };
    var peg$c43 = /^[ -!#-[\]-\u10FFFF]/;
    var peg$c44 = peg$classExpectation([[" ", "!"], ["#", "["], ["]", "\u10FF"], "F", "F"], false, false);
    var peg$c45 = /^[0-9a-f]/i;
    var peg$c46 = peg$classExpectation([["0", "9"], ["a", "f"]], false, true);
    var peg$c47 = /^[^\n\r\t <>\/$,=|:]/;
    var peg$c48 = peg$classExpectation(["\n", "\r", "\t", " ", "<", ">", "/", "$", ",", "=", "|", ":"], true, false);
    var peg$c49 = function (linkContents) {
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
        }
        else if (rightArrowIndex !== -1 &&
            (leftArrowIndex === -1 ||
                linkContents.length - rightArrowIndex <= leftArrowIndex)) {
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
        }
        else if (leftArrowIndex !== -1 &&
            (rightArrowIndex === -1 ||
                leftArrowIndex < linkContents.length - rightArrowIndex)) {
            const offset = leftArrowIndex + 2;
            let children;
            try {
                children = peg$parse(linkContents.slice(offset));
            }
            catch (e) {
                const thisLoc = location();
                const errLoc = e.location;
                const str = `${e.message} \nAt line ` +
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
        }
        else if (barIndex !== -1) {
            let children;
            try {
                children = peg$parse(linkContents.slice(0, barIndex));
            }
            catch (e) {
                console.log(e);
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
        }
        else {
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
    };
    var peg$c50 = /^[^\]]/;
    var peg$c51 = peg$classExpectation(["]"], true, false);
    var peg$c52 = "[[";
    var peg$c53 = peg$literalExpectation("[[", false);
    var peg$c54 = "]]";
    var peg$c55 = peg$literalExpectation("]]", false);
    var peg$c56 = "->";
    var peg$c57 = peg$literalExpectation("->", false);
    var peg$c58 = "|";
    var peg$c59 = peg$literalExpectation("|", false);
    var peg$c60 = "]";
    var peg$c61 = peg$literalExpectation("]", false);
    var peg$c62 = "<";
    var peg$c63 = peg$literalExpectation("<", false);
    var peg$c64 = "-->";
    var peg$c65 = peg$literalExpectation("-->", false);
    var peg$c66 = function (val) { return val; };
    var peg$c67 = function ($value) {
        const node = {
            type: 'comment',
            value,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c68 = "<!--";
    var peg$c69 = peg$literalExpectation("<!--", false);
    var peg$c70 = function (elem) {
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
        }
        else if (tagName === 'tw-invocation') {
            elem.type = 'invocation';
            elem.subtype = 'invocationElement';
            elem.arguments = elem.children.filter((child) => {
                return child.tagName === 'tw-argument';
            });
            elem.children = elem.children.filter((child) => {
                return child.tagName !== 'tw-argument';
            });
        }
        else if (tagName === 'tw-invocation-body') {
            elem.type = 'invocationBody';
            elem.subtype = 'invocationBodyElement';
        }
        else if (elem.tagName === 'tw-number') {
            elem.type = 'number';
            elem.subtype = 'numberElement';
            elem.value = elem.children[0];
            elem.children = [];
        }
        else if (tagName === 'tw-string') {
            elem.type = 'string';
            elem.subtype = 'stringElement';
            elem.value = elem.children[0];
            elem.children = [];
        }
        else if (elem.tagName === 'tw-reserved-word') {
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
    };
    var peg$c71 = "<script";
    var peg$c72 = peg$literalExpectation("<script", false);
    var peg$c73 = ">";
    var peg$c74 = peg$literalExpectation(">", false);
    var peg$c75 = "</script>";
    var peg$c76 = peg$literalExpectation("</script>", false);
    var peg$c77 = "</script";
    var peg$c78 = peg$literalExpectation("</script", false);
    var peg$c79 = function (attributes, contents) {
        const node = {
            type: 'element',
            subtype: 'script',
            tagName: 'script',
            source: contents,
            attributes,
            children: [contents,],
        };
        if (options.parseJavascript === true) {
            if (typeof esprima !== 'object' ||
                !esprima ||
                typeof esprima.parseModule !== 'function') {
                throw new Error('The options.parseJavascript option was true but the ' +
                    'esprima.parseModule dependency was not present.');
            }
            node.children[0] = esprima.parseModule(contents);
        }
        return node;
    };
    var peg$c80 = "<style";
    var peg$c81 = peg$literalExpectation("<style", false);
    var peg$c82 = "</style>";
    var peg$c83 = peg$literalExpectation("</style>", false);
    var peg$c84 = "</style";
    var peg$c85 = peg$literalExpectation("</style", false);
    var peg$c86 = function (attributes, contents) {
        const node = {
            type: 'element',
            subtype: 'style',
            tagName: 'style',
            source: contents,
            attributes,
            children: [contents,],
        };
        if (options.parseCss === true) {
            if (typeof css !== 'object' ||
                !css &&
                    typeof css.parse !== 'function') {
                throw new Error('The options.parseCss option was true but the ' +
                    'css.parse dependency was not present.');
            }
            node.children[0] = css.parse(contents);
        }
    };
    var peg$c87 = function (attrs) { return attrs; };
    var peg$c88 = function (attrs) {
        return attrs;
    };
    var peg$c89 = peg$otherExpectation("voidElement");
    var peg$c90 = function (tagName, attrs) {
        if (typeof options.voidElements === 'object' &&
            options.voidElements &&
            !options.voidElements[tagName.toLowerCase()]) {
            const loc = location();
            throw new Error('A invalid single tag/void element was found at line ' +
                `${loc.start.line}, column ${loc.start.column}.`);
        }
        return {
            type: 'element',
            tagName,
            attributes: attrs,
            children: [],
        };
    };
    var peg$c91 = peg$otherExpectation("elementWithTwoTags");
    var peg$c92 = function (tagName, attrs, children) {
        return {
            children,
            type: 'element',
            tagName,
            attributes: attrs,
        };
    };
    var peg$c93 = peg$otherExpectation("elementOpeningCharacter");
    var peg$c94 = "<-";
    var peg$c95 = peg$literalExpectation("<-", false);
    var peg$c96 = peg$otherExpectation("elementClosingCharacter");
    var peg$c97 = peg$otherExpectation("elementTagNameOrAttributeKey");
    var peg$c98 = peg$otherExpectation("Element key character");
    var peg$c99 = /^[a-zA-Z\-]/;
    var peg$c100 = peg$classExpectation([["a", "z"], ["A", "Z"], "-"], false, false);
    var peg$c101 = peg$otherExpectation("elementTagName");
    var peg$c102 = peg$otherExpectation("elementAttribute");
    var peg$c103 = "=";
    var peg$c104 = peg$literalExpectation("=", false);
    var peg$c105 = function (key, value) { return value; };
    var peg$c106 = function (key, attrValue) {
        const node = {
            type: 'elementAttribute',
            key,
            value: (attrValue || {}).value || '',
        };
        if (options.location === true) {
            node.location = location();
        }
    };
    var peg$c107 = peg$otherExpectation("elementAttributeKey");
    var peg$c108 = peg$otherExpectation("elementAttributeValue");
    var peg$c109 = peg$otherExpectation("Harlowe-style invocation opening");
    var peg$c110 = "(";
    var peg$c111 = peg$literalExpectation("(", false);
    var peg$c112 = peg$otherExpectation("Harlowe-style invocation closing");
    var peg$c113 = ")";
    var peg$c114 = peg$literalExpectation(")", false);
    var peg$c115 = peg$otherExpectation("Sugar-style invocation opening");
    var peg$c116 = "<<";
    var peg$c117 = peg$literalExpectation("<<", false);
    var peg$c118 = peg$otherExpectation("Sugar-style invocation closing");
    var peg$c119 = ">>";
    var peg$c120 = peg$literalExpectation(">>", false);
    var peg$c121 = peg$otherExpectation("variableOpener");
    var peg$c122 = "$";
    var peg$c123 = peg$literalExpectation("$", false);
    var peg$c124 = function (varName) {
        const node = {
            type: 'variable',
            name: varName,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c125 = "plus";
    var peg$c126 = peg$literalExpectation("plus", false);
    var peg$c127 = "+";
    var peg$c128 = peg$literalExpectation("+", false);
    var peg$c129 = function (source) {
        const node = {
            type: 'reservedWord',
            subtype: 'additionAndConcatenationWord',
            source,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c130 = "minus";
    var peg$c131 = peg$literalExpectation("minus", false);
    var peg$c132 = "-";
    var peg$c133 = peg$literalExpectation("-", false);
    var peg$c134 = function (source) {
        const node = {
            type: 'reservedWord',
            subtype: 'subtractionWord',
            source,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c135 = "times";
    var peg$c136 = peg$literalExpectation("times", false);
    var peg$c137 = "*";
    var peg$c138 = peg$literalExpectation("*", false);
    var peg$c139 = function (source) {
        const node = {
            type: 'reservedWord',
            subtype: 'multiplicationWord',
            source,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c140 = "dividedby";
    var peg$c141 = peg$literalExpectation("dividedby", false);
    var peg$c142 = "divided-by";
    var peg$c143 = peg$literalExpectation("divided-by", false);
    var peg$c144 = function (source) {
        const node = {
            type: 'reservedWord',
            subtype: 'divisionWord',
            source,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c145 = "modulo";
    var peg$c146 = peg$literalExpectation("modulo", false);
    var peg$c147 = "%";
    var peg$c148 = peg$literalExpectation("%", false);
    var peg$c149 = function (source) {
        const node = {
            type: 'reservedWord',
            subtype: 'moduloWord',
            source,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c150 = "to";
    var peg$c151 = peg$literalExpectation("to", false);
    var peg$c152 = function (source) {
        const node = {
            type: 'reservedWord',
            subtype: 'assignmentWord',
            source,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c153 = "plusequals";
    var peg$c154 = peg$literalExpectation("plusequals", false);
    var peg$c155 = "plus-equals";
    var peg$c156 = peg$literalExpectation("plus-equals", false);
    var peg$c157 = "+=";
    var peg$c158 = peg$literalExpectation("+=", false);
    var peg$c159 = function (source) {
        const node = {
            type: 'reservedWord',
            subtype: 'assignmentAdderWord',
            source,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c160 = "minusequals";
    var peg$c161 = peg$literalExpectation("minusequals", false);
    var peg$c162 = "minus-equals";
    var peg$c163 = peg$literalExpectation("minus-equals", false);
    var peg$c164 = "-=";
    var peg$c165 = peg$literalExpectation("-=", false);
    var peg$c166 = function (source) {
        const node = {
            type: 'reservedWord',
            subtype: 'assignmentSubtractorWord',
            source,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c167 = "timesequals";
    var peg$c168 = peg$literalExpectation("timesequals", false);
    var peg$c169 = "times-equals";
    var peg$c170 = peg$literalExpectation("times-equals", false);
    var peg$c171 = "*=";
    var peg$c172 = peg$literalExpectation("*=", false);
    var peg$c173 = function (source) {
        const node = {
            type: 'reservedWord',
            subtype: 'assignmentMultiplierWord',
            source,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c174 = "divideequals";
    var peg$c175 = peg$literalExpectation("divideequals", false);
    var peg$c176 = "divide-equals";
    var peg$c177 = peg$literalExpectation("divide-equals", false);
    var peg$c178 = "/=";
    var peg$c179 = peg$literalExpectation("/=", false);
    var peg$c180 = function (source) {
        const node = {
            type: 'reservedWord',
            subtype: 'assignmentDividerWord',
            source,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c181 = "moduloequals";
    var peg$c182 = peg$literalExpectation("moduloequals", false);
    var peg$c183 = "modulo-equals";
    var peg$c184 = peg$literalExpectation("modulo-equals", false);
    var peg$c185 = "%=";
    var peg$c186 = peg$literalExpectation("%=", false);
    var peg$c187 = function (source) {
        const node = {
            type: 'reservedWord',
            subtype: 'assignmentModuloWord',
            source,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c188 = "it";
    var peg$c189 = peg$literalExpectation("it", false);
    var peg$c190 = function (source) {
        const node = {
            type: 'reservedWord',
            subtype: 'lastReferencedVariableWord',
            source,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c191 = "eq";
    var peg$c192 = peg$literalExpectation("eq", false);
    var peg$c193 = "==";
    var peg$c194 = peg$literalExpectation("==", false);
    var peg$c195 = function (source) {
        const node = {
            type: 'reservedWord',
            subtype: 'naiveEqualityWord',
            source,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c196 = "neq";
    var peg$c197 = peg$literalExpectation("neq", false);
    var peg$c198 = "!=";
    var peg$c199 = peg$literalExpectation("!=", false);
    var peg$c200 = function (source) {
        const node = {
            type: 'reservedWord',
            subtype: 'naiveNonEqualityWord',
            source,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c201 = "is";
    var peg$c202 = peg$literalExpectation("is", false);
    var peg$c203 = "===";
    var peg$c204 = peg$literalExpectation("===", false);
    var peg$c205 = function (source) {
        const node = {
            type: 'reservedWord',
            subtype: 'exactEqualityWord',
            source,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c206 = "isnot";
    var peg$c207 = peg$literalExpectation("isnot", false);
    var peg$c208 = "is-not";
    var peg$c209 = peg$literalExpectation("is-not", false);
    var peg$c210 = "!==";
    var peg$c211 = peg$literalExpectation("!==", false);
    var peg$c212 = function (source) {
        const node = {
            type: 'reservedWord',
            subtype: 'exactNonEqualityWord',
            source,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c213 = peg$otherExpectation("argument");
    var peg$c214 = function (arg) {
        if (arg.type === 'invocation') {
            return arg;
        }
        const argument = {
            type: arg.type,
            value: arg.value,
        };
        if ('subtype' in arg) {
            argument.subtype = arg.subtype;
        }
        if (options.location === true) {
            options.location = location();
        }
        return arg;
    };
    var peg$c215 = ":";
    var peg$c216 = peg$literalExpectation(":", false);
    var peg$c217 = function (invokeName, args) {
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
    };
    var peg$c218 = function (invoke, children) {
        const node = {
            type: 'invocationBody',
            subtype: 'hook',
            children,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c219 = function (invoke, body) {
        const node = {
            type: 'invocation',
            subtype: 'withBody',
            functionName: invoke.name,
            arguments: invoke.arguments,
            children: [body,],
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c220 = "end";
    var peg$c221 = peg$literalExpectation("end", false);
    var peg$c222 = function (invoke, children) {
        const node = {
            type: 'invocationBody',
            subtype: 'inner',
            children,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c223 = "[";
    var peg$c224 = peg$literalExpectation("[", false);
    var peg$c225 = function (characters) {
        return characters;
    };
    var peg$currPos = 0;
    var peg$savedPos = 0;
    var peg$posDetailsCache = [{ line: 1, column: 1 }];
    var peg$maxFailPos = 0;
    var peg$maxFailExpected = [];
    var peg$silentFails = 0;
    var peg$result;
    if ("startRule" in options) {
        if (!(options.startRule in peg$startRuleFunctions)) {
            throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
        }
        peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }
    function text() {
        return input.substring(peg$savedPos, peg$currPos);
    }
    function offset() {
        return peg$savedPos;
    }
    function range() {
        return [peg$savedPos, peg$currPos];
    }
    function location() {
        return peg$computeLocation(peg$savedPos, peg$currPos);
    }
    function expected(description, location) {
        location = location !== undefined
            ? location
            : peg$computeLocation(peg$savedPos, peg$currPos);
        throw peg$buildStructuredError([peg$otherExpectation(description)], input.substring(peg$savedPos, peg$currPos), location);
    }
    function error(message, location) {
        location = location !== undefined
            ? location
            : peg$computeLocation(peg$savedPos, peg$currPos);
        throw peg$buildSimpleError(message, location);
    }
    function peg$literalExpectation(text, ignoreCase) {
        return { type: "literal", text: text, ignoreCase: ignoreCase };
    }
    function peg$classExpectation(parts, inverted, ignoreCase) {
        return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
    }
    function peg$anyExpectation() {
        return { type: "any" };
    }
    function peg$endExpectation() {
        return { type: "end" };
    }
    function peg$otherExpectation(description) {
        return { type: "other", description: description };
    }
    function peg$computePosDetails(pos) {
        var details = peg$posDetailsCache[pos];
        var p;
        if (details) {
            return details;
        }
        else {
            p = pos - 1;
            while (!peg$posDetailsCache[p]) {
                p--;
            }
            details = peg$posDetailsCache[p];
            details = {
                line: details.line,
                column: details.column
            };
            while (p < pos) {
                if (input.charCodeAt(p) === 10) {
                    details.line++;
                    details.column = 1;
                }
                else {
                    details.column++;
                }
                p++;
            }
            peg$posDetailsCache[pos] = details;
            return details;
        }
    }
    function peg$computeLocation(startPos, endPos) {
        var startPosDetails = peg$computePosDetails(startPos);
        var endPosDetails = peg$computePosDetails(endPos);
        return {
            start: {
                offset: startPos,
                line: startPosDetails.line,
                column: startPosDetails.column
            },
            end: {
                offset: endPos,
                line: endPosDetails.line,
                column: endPosDetails.column
            }
        };
    }
    function peg$fail(expected) {
        if (peg$currPos < peg$maxFailPos) {
            return;
        }
        if (peg$currPos > peg$maxFailPos) {
            peg$maxFailPos = peg$currPos;
            peg$maxFailExpected = [];
        }
        peg$maxFailExpected.push(expected);
    }
    function peg$buildSimpleError(message, location) {
        return new peg$SyntaxError(message, null, null, location);
    }
    function peg$buildStructuredError(expected, found, location) {
        return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);
    }
    function peg$parsestart() {
        var s0, s1;
        s0 = [];
        s1 = peg$parseallGlobalTypes();
        while (s1 !== peg$FAILED) {
            s0.push(s1);
            s1 = peg$parseallGlobalTypes();
        }
        return s0;
    }
    function peg$parseallGlobalTypes() {
        var s0;
        s0 = peg$parselinkLiteral();
        if (s0 === peg$FAILED) {
            s0 = peg$parsecomment();
            if (s0 === peg$FAILED) {
                s0 = peg$parseelem();
                if (s0 === peg$FAILED) {
                    s0 = peg$parseinvocation();
                    if (s0 === peg$FAILED) {
                        s0 = peg$parsevariable();
                        if (s0 === peg$FAILED) {
                            s0 = peg$parsetext();
                        }
                    }
                }
            }
        }
        return s0;
    }
    function peg$parseany() {
        var s0;
        if (input.length > peg$currPos) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c0);
            }
        }
        return s0;
    }
    function peg$parsews() {
        var s0, s1;
        peg$silentFails++;
        if (peg$c2.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c3);
            }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c1);
            }
        }
        return s0;
    }
    function peg$parsecomma() {
        var s0;
        if (input.charCodeAt(peg$currPos) === 44) {
            s0 = peg$c4;
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c5);
            }
        }
        return s0;
    }
    function peg$parsenumber() {
        var s0, s1, s2, s3, s4, s5;
        s0 = peg$currPos;
        s1 = peg$currPos;
        s2 = [];
        if (peg$c6.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
        }
        else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c7);
            }
        }
        while (s3 !== peg$FAILED) {
            s2.push(s3);
            if (peg$c6.test(input.charAt(peg$currPos))) {
                s3 = input.charAt(peg$currPos);
                peg$currPos++;
            }
            else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c7);
                }
            }
        }
        if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 46) {
                s3 = peg$c8;
                peg$currPos++;
            }
            else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c9);
                }
            }
            if (s3 !== peg$FAILED) {
                s4 = [];
                if (peg$c6.test(input.charAt(peg$currPos))) {
                    s5 = input.charAt(peg$currPos);
                    peg$currPos++;
                }
                else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c7);
                    }
                }
                if (s5 !== peg$FAILED) {
                    while (s5 !== peg$FAILED) {
                        s4.push(s5);
                        if (peg$c6.test(input.charAt(peg$currPos))) {
                            s5 = input.charAt(peg$currPos);
                            peg$currPos++;
                        }
                        else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c7);
                            }
                        }
                    }
                }
                else {
                    s4 = peg$FAILED;
                }
                if (s4 !== peg$FAILED) {
                    s2 = [s2, s3, s4];
                    s1 = s2;
                }
                else {
                    peg$currPos = s1;
                    s1 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s1;
                s1 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s1;
            s1 = peg$FAILED;
        }
        if (s1 === peg$FAILED) {
            s1 = [];
            if (peg$c6.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
            }
            else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c7);
                }
            }
            if (s2 !== peg$FAILED) {
                while (s2 !== peg$FAILED) {
                    s1.push(s2);
                    if (peg$c6.test(input.charAt(peg$currPos))) {
                        s2 = input.charAt(peg$currPos);
                        peg$currPos++;
                    }
                    else {
                        s2 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c7);
                        }
                    }
                }
            }
            else {
                s1 = peg$FAILED;
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c10(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parsedoubleQuote() {
        var s0;
        if (input.charCodeAt(peg$currPos) === 34) {
            s0 = peg$c11;
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c12);
            }
        }
        return s0;
    }
    function peg$parsesingleQuote() {
        var s0;
        if (input.charCodeAt(peg$currPos) === 39) {
            s0 = peg$c13;
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c14);
            }
        }
        return s0;
    }
    function peg$parsestring() {
        var s0, s1, s2, s3, s4;
        s0 = peg$currPos;
        s1 = peg$parsedoubleQuote();
        if (s1 !== peg$FAILED) {
            s2 = peg$currPos;
            s3 = [];
            s4 = peg$parsedoubleQuoteCharacter();
            while (s4 !== peg$FAILED) {
                s3.push(s4);
                s4 = peg$parsedoubleQuoteCharacter();
            }
            if (s3 !== peg$FAILED) {
                s2 = input.substring(s2, peg$currPos);
            }
            else {
                s2 = s3;
            }
            if (s2 !== peg$FAILED) {
                s3 = peg$parsedoubleQuote();
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$c15(s2);
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parsesingleQuote();
            if (s1 !== peg$FAILED) {
                s2 = peg$currPos;
                s3 = [];
                s4 = peg$parsesingleQuoteCharacter();
                while (s4 !== peg$FAILED) {
                    s3.push(s4);
                    s4 = peg$parsesingleQuoteCharacter();
                }
                if (s3 !== peg$FAILED) {
                    s2 = input.substring(s2, peg$currPos);
                }
                else {
                    s2 = s3;
                }
                if (s2 !== peg$FAILED) {
                    s3 = peg$parsesingleQuote();
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s0 = peg$c16(s2);
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        return s0;
    }
    function peg$parsebareString() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        s1 = peg$currPos;
        s2 = [];
        s3 = peg$parseinvokeNameChar();
        if (s3 !== peg$FAILED) {
            while (s3 !== peg$FAILED) {
                s2.push(s3);
                s3 = peg$parseinvokeNameChar();
            }
        }
        else {
            s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
            s1 = input.substring(s1, peg$currPos);
        }
        else {
            s1 = s2;
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c17(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parsedoubleQuoteCharacter() {
        var s0, s1, s2;
        s0 = peg$currPos;
        s1 = peg$currPos;
        peg$silentFails++;
        s2 = peg$parsedoubleQuote();
        peg$silentFails--;
        if (s2 === peg$FAILED) {
            s1 = undefined;
        }
        else {
            peg$currPos = s1;
            s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parsestrChar();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$c18(s2);
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parsesingleQuoteCharacter() {
        var s0, s1, s2;
        s0 = peg$currPos;
        s1 = peg$currPos;
        peg$silentFails++;
        s2 = peg$parsesingleQuote();
        peg$silentFails--;
        if (s2 === peg$FAILED) {
            s1 = undefined;
        }
        else {
            peg$currPos = s1;
            s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parsestrChar();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$c18(s2);
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parsestrChar() {
        var s0, s1;
        peg$silentFails++;
        s0 = peg$parseescapeSequence();
        if (s0 === peg$FAILED) {
            s0 = peg$parseunescaped();
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c19);
            }
        }
        return s0;
    }
    function peg$parseescapeSequence() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;
        s0 = peg$currPos;
        s1 = peg$parseescapeCharacter();
        if (s1 !== peg$FAILED) {
            s2 = peg$parsedoubleQuote();
            if (s2 === peg$FAILED) {
                s2 = peg$parsesingleQuote();
                if (s2 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 92) {
                        s2 = peg$c20;
                        peg$currPos++;
                    }
                    else {
                        s2 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c21);
                        }
                    }
                    if (s2 === peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 47) {
                            s2 = peg$c22;
                            peg$currPos++;
                        }
                        else {
                            s2 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c23);
                            }
                        }
                        if (s2 === peg$FAILED) {
                            s2 = peg$currPos;
                            if (input.charCodeAt(peg$currPos) === 98) {
                                s3 = peg$c24;
                                peg$currPos++;
                            }
                            else {
                                s3 = peg$FAILED;
                                if (peg$silentFails === 0) {
                                    peg$fail(peg$c25);
                                }
                            }
                            if (s3 !== peg$FAILED) {
                                peg$savedPos = s2;
                                s3 = peg$c26();
                            }
                            s2 = s3;
                            if (s2 === peg$FAILED) {
                                s2 = peg$currPos;
                                if (input.charCodeAt(peg$currPos) === 102) {
                                    s3 = peg$c27;
                                    peg$currPos++;
                                }
                                else {
                                    s3 = peg$FAILED;
                                    if (peg$silentFails === 0) {
                                        peg$fail(peg$c28);
                                    }
                                }
                                if (s3 !== peg$FAILED) {
                                    peg$savedPos = s2;
                                    s3 = peg$c29();
                                }
                                s2 = s3;
                                if (s2 === peg$FAILED) {
                                    s2 = peg$currPos;
                                    if (input.charCodeAt(peg$currPos) === 110) {
                                        s3 = peg$c30;
                                        peg$currPos++;
                                    }
                                    else {
                                        s3 = peg$FAILED;
                                        if (peg$silentFails === 0) {
                                            peg$fail(peg$c31);
                                        }
                                    }
                                    if (s3 !== peg$FAILED) {
                                        peg$savedPos = s2;
                                        s3 = peg$c32();
                                    }
                                    s2 = s3;
                                    if (s2 === peg$FAILED) {
                                        s2 = peg$currPos;
                                        if (input.charCodeAt(peg$currPos) === 114) {
                                            s3 = peg$c33;
                                            peg$currPos++;
                                        }
                                        else {
                                            s3 = peg$FAILED;
                                            if (peg$silentFails === 0) {
                                                peg$fail(peg$c34);
                                            }
                                        }
                                        if (s3 !== peg$FAILED) {
                                            peg$savedPos = s2;
                                            s3 = peg$c35();
                                        }
                                        s2 = s3;
                                        if (s2 === peg$FAILED) {
                                            s2 = peg$currPos;
                                            if (input.charCodeAt(peg$currPos) === 116) {
                                                s3 = peg$c36;
                                                peg$currPos++;
                                            }
                                            else {
                                                s3 = peg$FAILED;
                                                if (peg$silentFails === 0) {
                                                    peg$fail(peg$c37);
                                                }
                                            }
                                            if (s3 !== peg$FAILED) {
                                                peg$savedPos = s2;
                                                s3 = peg$c38();
                                            }
                                            s2 = s3;
                                            if (s2 === peg$FAILED) {
                                                s2 = peg$currPos;
                                                if (input.charCodeAt(peg$currPos) === 117) {
                                                    s3 = peg$c39;
                                                    peg$currPos++;
                                                }
                                                else {
                                                    s3 = peg$FAILED;
                                                    if (peg$silentFails === 0) {
                                                        peg$fail(peg$c40);
                                                    }
                                                }
                                                if (s3 !== peg$FAILED) {
                                                    s4 = peg$currPos;
                                                    s5 = peg$currPos;
                                                    s6 = peg$parseHEXDIG();
                                                    if (s6 !== peg$FAILED) {
                                                        s7 = peg$parseHEXDIG();
                                                        if (s7 !== peg$FAILED) {
                                                            s8 = peg$parseHEXDIG();
                                                            if (s8 !== peg$FAILED) {
                                                                s9 = peg$parseHEXDIG();
                                                                if (s9 !== peg$FAILED) {
                                                                    s6 = [s6, s7, s8, s9];
                                                                    s5 = s6;
                                                                }
                                                                else {
                                                                    peg$currPos = s5;
                                                                    s5 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s5;
                                                                s5 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s5;
                                                            s5 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s5;
                                                        s5 = peg$FAILED;
                                                    }
                                                    if (s5 !== peg$FAILED) {
                                                        s4 = input.substring(s4, peg$currPos);
                                                    }
                                                    else {
                                                        s4 = s5;
                                                    }
                                                    if (s4 !== peg$FAILED) {
                                                        peg$savedPos = s2;
                                                        s2 = peg$c41(s4);
                                                    }
                                                    else {
                                                        peg$currPos = s2;
                                                        s2 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s2;
                                                    s2 = peg$FAILED;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$c42(s2);
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parseunescaped() {
        var s0;
        if (peg$c43.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c44);
            }
        }
        return s0;
    }
    function peg$parseescapeCharacter() {
        var s0;
        if (input.charCodeAt(peg$currPos) === 92) {
            s0 = peg$c20;
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c21);
            }
        }
        return s0;
    }
    function peg$parseHEXDIG() {
        var s0;
        if (peg$c45.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c46);
            }
        }
        return s0;
    }
    function peg$parseinvokeNameChar() {
        var s0;
        if (peg$c47.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c48);
            }
        }
        return s0;
    }
    function peg$parselinkLiteral() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        s1 = peg$parselinkOpen();
        if (s1 !== peg$FAILED) {
            s2 = peg$parselinkContents();
            if (s2 !== peg$FAILED) {
                s3 = peg$parselinkClose();
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$c49(s2);
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parselinkContents() {
        var s0, s1, s2;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parselinkChar();
        if (s2 !== peg$FAILED) {
            while (s2 !== peg$FAILED) {
                s1.push(s2);
                s2 = peg$parselinkChar();
            }
        }
        else {
            s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
            s0 = input.substring(s0, peg$currPos);
        }
        else {
            s0 = s1;
        }
        return s0;
    }
    function peg$parselinkChar() {
        var s0;
        if (peg$c50.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c51);
            }
        }
        return s0;
    }
    function peg$parselinkOpen() {
        var s0;
        if (input.substr(peg$currPos, 2) === peg$c52) {
            s0 = peg$c52;
            peg$currPos += 2;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c53);
            }
        }
        return s0;
    }
    function peg$parselinkClose() {
        var s0;
        if (input.substr(peg$currPos, 2) === peg$c54) {
            s0 = peg$c54;
            peg$currPos += 2;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c55);
            }
        }
        return s0;
    }
    function peg$parselinkTextItem() {
        var s0, s1, s2, s3, s4;
        s0 = peg$parsecomment();
        if (s0 === peg$FAILED) {
            s0 = peg$parseelem();
            if (s0 === peg$FAILED) {
                s0 = peg$parsevariable();
                if (s0 === peg$FAILED) {
                    s0 = peg$parseinvocation();
                    if (s0 === peg$FAILED) {
                        s0 = peg$currPos;
                        s1 = [];
                        s2 = peg$currPos;
                        s3 = peg$currPos;
                        peg$silentFails++;
                        s4 = peg$parselinkTextEnder();
                        peg$silentFails--;
                        if (s4 === peg$FAILED) {
                            s3 = undefined;
                        }
                        else {
                            peg$currPos = s3;
                            s3 = peg$FAILED;
                        }
                        if (s3 !== peg$FAILED) {
                            s4 = peg$parseany();
                            if (s4 !== peg$FAILED) {
                                s3 = [s3, s4];
                                s2 = s3;
                            }
                            else {
                                peg$currPos = s2;
                                s2 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s2;
                            s2 = peg$FAILED;
                        }
                        if (s2 !== peg$FAILED) {
                            while (s2 !== peg$FAILED) {
                                s1.push(s2);
                                s2 = peg$currPos;
                                s3 = peg$currPos;
                                peg$silentFails++;
                                s4 = peg$parselinkTextEnder();
                                peg$silentFails--;
                                if (s4 === peg$FAILED) {
                                    s3 = undefined;
                                }
                                else {
                                    peg$currPos = s3;
                                    s3 = peg$FAILED;
                                }
                                if (s3 !== peg$FAILED) {
                                    s4 = peg$parseany();
                                    if (s4 !== peg$FAILED) {
                                        s3 = [s3, s4];
                                        s2 = s3;
                                    }
                                    else {
                                        peg$currPos = s2;
                                        s2 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s2;
                                    s2 = peg$FAILED;
                                }
                            }
                        }
                        else {
                            s1 = peg$FAILED;
                        }
                        if (s1 !== peg$FAILED) {
                            s0 = input.substring(s0, peg$currPos);
                        }
                        else {
                            s0 = s1;
                        }
                    }
                }
            }
        }
        return s0;
    }
    function peg$parselinkTextEnder() {
        var s0, s1, s2;
        if (input.substr(peg$currPos, 2) === peg$c56) {
            s0 = peg$c56;
            peg$currPos += 2;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c57);
            }
        }
        if (s0 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 124) {
                s0 = peg$c58;
                peg$currPos++;
            }
            else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c59);
                }
            }
            if (s0 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 93) {
                    s0 = peg$c60;
                    peg$currPos++;
                }
                else {
                    s0 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c61);
                    }
                }
                if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    if (input.charCodeAt(peg$currPos) === 60) {
                        s1 = peg$c62;
                        peg$currPos++;
                    }
                    else {
                        s1 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c63);
                        }
                    }
                    if (s1 !== peg$FAILED) {
                        s2 = peg$parseelemKeyChar();
                        if (s2 !== peg$FAILED) {
                            s1 = [s1, s2];
                            s0 = s1;
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
            }
        }
        return s0;
    }
    function peg$parsepassageNameChar() {
        var s0;
        if (peg$c50.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c51);
            }
        }
        return s0;
    }
    function peg$parsecomment() {
        var s0, s1, s2, s3, s4, s5;
        s0 = peg$currPos;
        s1 = peg$parsecommentOpen();
        if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$currPos;
            s4 = peg$currPos;
            peg$silentFails++;
            if (input.substr(peg$currPos, 3) === peg$c64) {
                s5 = peg$c64;
                peg$currPos += 3;
            }
            else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c65);
                }
            }
            peg$silentFails--;
            if (s5 === peg$FAILED) {
                s4 = undefined;
            }
            else {
                peg$currPos = s4;
                s4 = peg$FAILED;
            }
            if (s4 !== peg$FAILED) {
                s5 = peg$parseany();
                if (s5 !== peg$FAILED) {
                    peg$savedPos = s3;
                    s3 = peg$c66(s5);
                }
                else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s3;
                s3 = peg$FAILED;
            }
            while (s3 !== peg$FAILED) {
                s2.push(s3);
                s3 = peg$currPos;
                s4 = peg$currPos;
                peg$silentFails++;
                if (input.substr(peg$currPos, 3) === peg$c64) {
                    s5 = peg$c64;
                    peg$currPos += 3;
                }
                else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c65);
                    }
                }
                peg$silentFails--;
                if (s5 === peg$FAILED) {
                    s4 = undefined;
                }
                else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                }
                if (s4 !== peg$FAILED) {
                    s5 = peg$parseany();
                    if (s5 !== peg$FAILED) {
                        peg$savedPos = s3;
                        s3 = peg$c66(s5);
                    }
                    else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                }
            }
            if (s2 !== peg$FAILED) {
                s3 = peg$parsecommentClose();
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$c67(s2);
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parsecommentOpen() {
        var s0;
        if (input.substr(peg$currPos, 4) === peg$c68) {
            s0 = peg$c68;
            peg$currPos += 4;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c69);
            }
        }
        return s0;
    }
    function peg$parsecommentClose() {
        var s0;
        if (input.substr(peg$currPos, 3) === peg$c64) {
            s0 = peg$c64;
            peg$currPos += 3;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c65);
            }
        }
        return s0;
    }
    function peg$parseelem() {
        var s0, s1;
        s0 = peg$currPos;
        s1 = peg$parsescript();
        if (s1 === peg$FAILED) {
            s1 = peg$parsestyle();
            if (s1 === peg$FAILED) {
                s1 = peg$parsedoubleTagElement();
                if (s1 === peg$FAILED) {
                    s1 = peg$parsesingleTagElement();
                }
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c70(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parsescript() {
        var s0, s1, s2, s3, s4, s5, s6, s7;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 7) === peg$c71) {
            s1 = peg$c71;
            peg$currPos += 7;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c72);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parsescriptOrStyleAttrs();
            if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 62) {
                    s3 = peg$c73;
                    peg$currPos++;
                }
                else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c74);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s4 = [];
                    s5 = peg$currPos;
                    s6 = peg$currPos;
                    peg$silentFails++;
                    if (input.substr(peg$currPos, 9) === peg$c75) {
                        s7 = peg$c75;
                        peg$currPos += 9;
                    }
                    else {
                        s7 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c76);
                        }
                    }
                    peg$silentFails--;
                    if (s7 === peg$FAILED) {
                        s6 = undefined;
                    }
                    else {
                        peg$currPos = s6;
                        s6 = peg$FAILED;
                    }
                    if (s6 !== peg$FAILED) {
                        s7 = peg$parseany();
                        if (s7 !== peg$FAILED) {
                            s6 = [s6, s7];
                            s5 = s6;
                        }
                        else {
                            peg$currPos = s5;
                            s5 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s5;
                        s5 = peg$FAILED;
                    }
                    while (s5 !== peg$FAILED) {
                        s4.push(s5);
                        s5 = peg$currPos;
                        s6 = peg$currPos;
                        peg$silentFails++;
                        if (input.substr(peg$currPos, 9) === peg$c75) {
                            s7 = peg$c75;
                            peg$currPos += 9;
                        }
                        else {
                            s7 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c76);
                            }
                        }
                        peg$silentFails--;
                        if (s7 === peg$FAILED) {
                            s6 = undefined;
                        }
                        else {
                            peg$currPos = s6;
                            s6 = peg$FAILED;
                        }
                        if (s6 !== peg$FAILED) {
                            s7 = peg$parseany();
                            if (s7 !== peg$FAILED) {
                                s6 = [s6, s7];
                                s5 = s6;
                            }
                            else {
                                peg$currPos = s5;
                                s5 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s5;
                            s5 = peg$FAILED;
                        }
                    }
                    if (s4 !== peg$FAILED) {
                        if (input.substr(peg$currPos, 8) === peg$c77) {
                            s5 = peg$c77;
                            peg$currPos += 8;
                        }
                        else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c78);
                            }
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = [];
                            s7 = peg$parsews();
                            while (s7 !== peg$FAILED) {
                                s6.push(s7);
                                s7 = peg$parsews();
                            }
                            if (s6 !== peg$FAILED) {
                                s7 = peg$parseelemCloseChar();
                                if (s7 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s0 = peg$c79(s2, s4);
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parsestyle() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 6) === peg$c80) {
            s1 = peg$c80;
            peg$currPos += 6;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c81);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parsescriptOrStyleAttrs();
            if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 62) {
                    s3 = peg$c73;
                    peg$currPos++;
                }
                else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c74);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s4 = peg$currPos;
                    s5 = [];
                    s6 = peg$currPos;
                    s7 = peg$currPos;
                    peg$silentFails++;
                    if (input.substr(peg$currPos, 8) === peg$c82) {
                        s8 = peg$c82;
                        peg$currPos += 8;
                    }
                    else {
                        s8 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c83);
                        }
                    }
                    peg$silentFails--;
                    if (s8 === peg$FAILED) {
                        s7 = undefined;
                    }
                    else {
                        peg$currPos = s7;
                        s7 = peg$FAILED;
                    }
                    if (s7 !== peg$FAILED) {
                        s8 = peg$parseany();
                        if (s8 !== peg$FAILED) {
                            s7 = [s7, s8];
                            s6 = s7;
                        }
                        else {
                            peg$currPos = s6;
                            s6 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s6;
                        s6 = peg$FAILED;
                    }
                    while (s6 !== peg$FAILED) {
                        s5.push(s6);
                        s6 = peg$currPos;
                        s7 = peg$currPos;
                        peg$silentFails++;
                        if (input.substr(peg$currPos, 8) === peg$c82) {
                            s8 = peg$c82;
                            peg$currPos += 8;
                        }
                        else {
                            s8 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c83);
                            }
                        }
                        peg$silentFails--;
                        if (s8 === peg$FAILED) {
                            s7 = undefined;
                        }
                        else {
                            peg$currPos = s7;
                            s7 = peg$FAILED;
                        }
                        if (s7 !== peg$FAILED) {
                            s8 = peg$parseany();
                            if (s8 !== peg$FAILED) {
                                s7 = [s7, s8];
                                s6 = s7;
                            }
                            else {
                                peg$currPos = s6;
                                s6 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s6;
                            s6 = peg$FAILED;
                        }
                    }
                    if (s5 !== peg$FAILED) {
                        s4 = input.substring(s4, peg$currPos);
                    }
                    else {
                        s4 = s5;
                    }
                    if (s4 !== peg$FAILED) {
                        if (input.substr(peg$currPos, 7) === peg$c84) {
                            s5 = peg$c84;
                            peg$currPos += 7;
                        }
                        else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c85);
                            }
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = [];
                            s7 = peg$parsews();
                            while (s7 !== peg$FAILED) {
                                s6.push(s7);
                                s7 = peg$parsews();
                            }
                            if (s6 !== peg$FAILED) {
                                s7 = peg$parseelemCloseChar();
                                if (s7 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s0 = peg$c86(s2, s4);
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parsescriptOrStyleAttrs() {
        var s0, s1, s2, s3, s4, s5;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$currPos;
        s3 = [];
        s4 = peg$parsews();
        if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
                s3.push(s4);
                s4 = peg$parsews();
            }
        }
        else {
            s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parseelemAttr();
            while (s5 !== peg$FAILED) {
                s4.push(s5);
                s5 = peg$parseelemAttr();
            }
            if (s4 !== peg$FAILED) {
                peg$savedPos = s2;
                s2 = peg$c87(s4);
            }
            else {
                peg$currPos = s2;
                s2 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s2;
            s2 = peg$FAILED;
        }
        while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$currPos;
            s3 = [];
            s4 = peg$parsews();
            if (s4 !== peg$FAILED) {
                while (s4 !== peg$FAILED) {
                    s3.push(s4);
                    s4 = peg$parsews();
                }
            }
            else {
                s3 = peg$FAILED;
            }
            if (s3 !== peg$FAILED) {
                s4 = [];
                s5 = peg$parseelemAttr();
                while (s5 !== peg$FAILED) {
                    s4.push(s5);
                    s5 = peg$parseelemAttr();
                }
                if (s4 !== peg$FAILED) {
                    peg$savedPos = s2;
                    s2 = peg$c87(s4);
                }
                else {
                    peg$currPos = s2;
                    s2 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s2;
                s2 = peg$FAILED;
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c88(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parsesingleTagElement() {
        var s0, s1, s2, s3, s4, s5, s6, s7;
        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$parseelemOpenChar();
        if (s1 !== peg$FAILED) {
            s2 = peg$parseelemTag();
            if (s2 !== peg$FAILED) {
                s3 = [];
                s4 = peg$parsews();
                while (s4 !== peg$FAILED) {
                    s3.push(s4);
                    s4 = peg$parsews();
                }
                if (s3 !== peg$FAILED) {
                    s4 = [];
                    s5 = peg$parseelemAttr();
                    while (s5 !== peg$FAILED) {
                        s4.push(s5);
                        s5 = peg$parseelemAttr();
                    }
                    if (s4 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 47) {
                            s5 = peg$c22;
                            peg$currPos++;
                        }
                        else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c23);
                            }
                        }
                        if (s5 === peg$FAILED) {
                            s5 = null;
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = [];
                            s7 = peg$parsews();
                            while (s7 !== peg$FAILED) {
                                s6.push(s7);
                                s7 = peg$parsews();
                            }
                            if (s6 !== peg$FAILED) {
                                s7 = peg$parseelemCloseChar();
                                if (s7 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s0 = peg$c90(s2, s4);
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c89);
            }
        }
        return s0;
    }
    function peg$parsedoubleTagElement() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8;
        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$parseelemOpenChar();
        if (s1 !== peg$FAILED) {
            s2 = peg$parseelemTag();
            if (s2 !== peg$FAILED) {
                s3 = [];
                s4 = peg$parsews();
                while (s4 !== peg$FAILED) {
                    s3.push(s4);
                    s4 = peg$parsews();
                }
                if (s3 !== peg$FAILED) {
                    s4 = [];
                    s5 = peg$parseelemAttr();
                    while (s5 !== peg$FAILED) {
                        s4.push(s5);
                        s5 = peg$parseelemAttr();
                    }
                    if (s4 !== peg$FAILED) {
                        s5 = [];
                        s6 = peg$parsews();
                        while (s6 !== peg$FAILED) {
                            s5.push(s6);
                            s6 = peg$parsews();
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parseelemCloseChar();
                            if (s6 !== peg$FAILED) {
                                s7 = peg$parseelemContents();
                                if (s7 !== peg$FAILED) {
                                    s8 = peg$parseelemClose();
                                    if (s8 !== peg$FAILED) {
                                        peg$savedPos = s0;
                                        s0 = peg$c92(s2, s4, s7);
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c91);
            }
        }
        return s0;
    }
    function peg$parseelemOpenChar() {
        var s0, s1, s2;
        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$currPos;
        peg$silentFails++;
        if (input.substr(peg$currPos, 2) === peg$c94) {
            s2 = peg$c94;
            peg$currPos += 2;
        }
        else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c95);
            }
        }
        peg$silentFails--;
        if (s2 === peg$FAILED) {
            s1 = undefined;
        }
        else {
            peg$currPos = s1;
            s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 60) {
                s2 = peg$c62;
                peg$currPos++;
            }
            else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c63);
                }
            }
            if (s2 !== peg$FAILED) {
                s1 = [s1, s2];
                s0 = s1;
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c93);
            }
        }
        return s0;
    }
    function peg$parseelemCloseChar() {
        var s0, s1;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 62) {
            s0 = peg$c73;
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c74);
            }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c96);
            }
        }
        return s0;
    }
    function peg$parseelemKey() {
        var s0, s1, s2;
        peg$silentFails++;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parseelemKeyChar();
        if (s2 !== peg$FAILED) {
            while (s2 !== peg$FAILED) {
                s1.push(s2);
                s2 = peg$parseelemKeyChar();
            }
        }
        else {
            s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
            s0 = input.substring(s0, peg$currPos);
        }
        else {
            s0 = s1;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c97);
            }
        }
        return s0;
    }
    function peg$parseelemKeyChar() {
        var s0, s1, s2, s3;
        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$currPos;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 62) {
            s2 = peg$c73;
            peg$currPos++;
        }
        else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c74);
            }
        }
        peg$silentFails--;
        if (s2 === peg$FAILED) {
            s1 = undefined;
        }
        else {
            peg$currPos = s1;
            s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
            s2 = [];
            if (peg$c99.test(input.charAt(peg$currPos))) {
                s3 = input.charAt(peg$currPos);
                peg$currPos++;
            }
            else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c100);
                }
            }
            if (s3 !== peg$FAILED) {
                while (s3 !== peg$FAILED) {
                    s2.push(s3);
                    if (peg$c99.test(input.charAt(peg$currPos))) {
                        s3 = input.charAt(peg$currPos);
                        peg$currPos++;
                    }
                    else {
                        s3 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c100);
                        }
                    }
                }
            }
            else {
                s2 = peg$FAILED;
            }
            if (s2 !== peg$FAILED) {
                s1 = [s1, s2];
                s0 = s1;
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c98);
            }
        }
        return s0;
    }
    function peg$parseelemTag() {
        var s0, s1;
        peg$silentFails++;
        s0 = peg$parseelemKey();
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c101);
            }
        }
        return s0;
    }
    function peg$parseelemAttr() {
        var s0, s1, s2, s3, s4, s5, s6;
        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$parseelemAttrKey();
        if (s1 !== peg$FAILED) {
            s2 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 61) {
                s3 = peg$c103;
                peg$currPos++;
            }
            else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c104);
                }
            }
            if (s3 !== peg$FAILED) {
                s4 = peg$parseelemAttrValue();
                if (s4 !== peg$FAILED) {
                    s5 = [];
                    s6 = peg$parsews();
                    while (s6 !== peg$FAILED) {
                        s5.push(s6);
                        s6 = peg$parsews();
                    }
                    if (s5 !== peg$FAILED) {
                        peg$savedPos = s2;
                        s2 = peg$c105(s1, s4);
                    }
                    else {
                        peg$currPos = s2;
                        s2 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s2;
                    s2 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s2;
                s2 = peg$FAILED;
            }
            if (s2 === peg$FAILED) {
                s2 = null;
            }
            if (s2 !== peg$FAILED) {
                s3 = [];
                s4 = peg$parsews();
                while (s4 !== peg$FAILED) {
                    s3.push(s4);
                    s4 = peg$parsews();
                }
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$c106(s1, s2);
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c102);
            }
        }
        return s0;
    }
    function peg$parseelemAttrKey() {
        var s0, s1;
        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$parseelemKey();
        if (s1 !== peg$FAILED) {
            s0 = input.substring(s0, peg$currPos);
        }
        else {
            s0 = s1;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c107);
            }
        }
        return s0;
    }
    function peg$parseelemAttrValue() {
        var s0, s1;
        peg$silentFails++;
        s0 = peg$parsestring();
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c108);
            }
        }
        return s0;
    }
    function peg$parseelemOpen() {
        var s0, s1, s2, s3, s4, s5;
        s0 = peg$currPos;
        s1 = peg$parseelemOpenChar();
        if (s1 !== peg$FAILED) {
            s2 = peg$parseelemTag();
            if (s2 !== peg$FAILED) {
                s3 = [];
                s4 = peg$parsews();
                while (s4 !== peg$FAILED) {
                    s3.push(s4);
                    s4 = peg$parsews();
                }
                if (s3 !== peg$FAILED) {
                    s4 = [];
                    s5 = peg$parseelemAttr();
                    while (s5 !== peg$FAILED) {
                        s4.push(s5);
                        s5 = peg$parseelemAttr();
                    }
                    if (s4 !== peg$FAILED) {
                        s5 = peg$parseelemCloseChar();
                        if (s5 !== peg$FAILED) {
                            s1 = [s1, s2, s3, s4, s5];
                            s0 = s1;
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parseelemContents() {
        var s0, s1;
        s0 = [];
        s1 = peg$parseallGlobalTypes();
        while (s1 !== peg$FAILED) {
            s0.push(s1);
            s1 = peg$parseallGlobalTypes();
        }
        return s0;
    }
    function peg$parseelemClose() {
        var s0, s1, s2, s3, s4, s5;
        s0 = peg$currPos;
        s1 = peg$parseelemOpenChar();
        if (s1 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 47) {
                s2 = peg$c22;
                peg$currPos++;
            }
            else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c23);
                }
            }
            if (s2 !== peg$FAILED) {
                s3 = peg$parseelemTag();
                if (s3 !== peg$FAILED) {
                    s4 = [];
                    s5 = peg$parsews();
                    while (s5 !== peg$FAILED) {
                        s4.push(s5);
                        s5 = peg$parsews();
                    }
                    if (s4 !== peg$FAILED) {
                        s5 = peg$parseelemCloseChar();
                        if (s5 !== peg$FAILED) {
                            s1 = [s1, s2, s3, s4, s5];
                            s0 = s1;
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parseharloweStyleInvokeOpen() {
        var s0, s1;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 40) {
            s0 = peg$c110;
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c111);
            }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c109);
            }
        }
        return s0;
    }
    function peg$parseharloweStyleInvokeClose() {
        var s0, s1;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 41) {
            s0 = peg$c113;
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c114);
            }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c112);
            }
        }
        return s0;
    }
    function peg$parsesugarStyleInvokeOpen() {
        var s0, s1;
        peg$silentFails++;
        if (input.substr(peg$currPos, 2) === peg$c116) {
            s0 = peg$c116;
            peg$currPos += 2;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c117);
            }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c115);
            }
        }
        return s0;
    }
    function peg$parsesugarStyleInvokeClose() {
        var s0, s1;
        peg$silentFails++;
        if (input.substr(peg$currPos, 2) === peg$c119) {
            s0 = peg$c119;
            peg$currPos += 2;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c120);
            }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c118);
            }
        }
        return s0;
    }
    function peg$parseinvokeName() {
        var s0, s1, s2;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parseinvokeNameChar();
        if (s2 !== peg$FAILED) {
            while (s2 !== peg$FAILED) {
                s1.push(s2);
                s2 = peg$parseinvokeNameChar();
            }
        }
        else {
            s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
            s0 = input.substring(s0, peg$currPos);
        }
        else {
            s0 = s1;
        }
        return s0;
    }
    function peg$parsevariableOpen() {
        var s0, s1;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 36) {
            s0 = peg$c122;
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c123);
            }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c121);
            }
        }
        return s0;
    }
    function peg$parsevariable() {
        var s0, s1, s2, s3, s4;
        s0 = peg$currPos;
        s1 = peg$parsevariableOpen();
        if (s1 !== peg$FAILED) {
            s2 = peg$currPos;
            s3 = [];
            s4 = peg$parseinvokeNameChar();
            if (s4 !== peg$FAILED) {
                while (s4 !== peg$FAILED) {
                    s3.push(s4);
                    s4 = peg$parseinvokeNameChar();
                }
            }
            else {
                s3 = peg$FAILED;
            }
            if (s3 !== peg$FAILED) {
                s2 = input.substring(s2, peg$currPos);
            }
            else {
                s2 = s3;
            }
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$c124(s2);
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parsereservedWord() {
        var s0;
        s0 = peg$parseadditionAndConcatenationWord();
        if (s0 === peg$FAILED) {
            s0 = peg$parsesubtractionWord();
            if (s0 === peg$FAILED) {
                s0 = peg$parsemultiplicationWord();
                if (s0 === peg$FAILED) {
                    s0 = peg$parsedivisionWord();
                    if (s0 === peg$FAILED) {
                        s0 = peg$parsemoduloWord();
                        if (s0 === peg$FAILED) {
                            s0 = peg$parseassignmentWord();
                            if (s0 === peg$FAILED) {
                                s0 = peg$parseassignmentAdderWord();
                                if (s0 === peg$FAILED) {
                                    s0 = peg$parseassignmentSubtractorWord();
                                    if (s0 === peg$FAILED) {
                                        s0 = peg$parseassignmentMultiplierWord();
                                        if (s0 === peg$FAILED) {
                                            s0 = peg$parseassignmentDividerWord();
                                            if (s0 === peg$FAILED) {
                                                s0 = peg$parseassignmentModuloWord();
                                                if (s0 === peg$FAILED) {
                                                    s0 = peg$parselastReferencedVariableWord();
                                                    if (s0 === peg$FAILED) {
                                                        s0 = peg$parsenaiveEqualityWord();
                                                        if (s0 === peg$FAILED) {
                                                            s0 = peg$parsenaiveNonEqualityWord();
                                                            if (s0 === peg$FAILED) {
                                                                s0 = peg$parseexactEqualityWord();
                                                                if (s0 === peg$FAILED) {
                                                                    s0 = peg$parseexactNonEqualityWord();
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return s0;
    }
    function peg$parseadditionAndConcatenationWord() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 4) === peg$c125) {
            s1 = peg$c125;
            peg$currPos += 4;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c126);
            }
        }
        if (s1 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 43) {
                s1 = peg$c127;
                peg$currPos++;
            }
            else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c128);
                }
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c129(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parsesubtractionWord() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 5) === peg$c130) {
            s1 = peg$c130;
            peg$currPos += 5;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c131);
            }
        }
        if (s1 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 45) {
                s1 = peg$c132;
                peg$currPos++;
            }
            else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c133);
                }
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c134(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parsemultiplicationWord() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 5) === peg$c135) {
            s1 = peg$c135;
            peg$currPos += 5;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c136);
            }
        }
        if (s1 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 42) {
                s1 = peg$c137;
                peg$currPos++;
            }
            else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c138);
                }
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c139(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parsedivisionWord() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 9) === peg$c140) {
            s1 = peg$c140;
            peg$currPos += 9;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c141);
            }
        }
        if (s1 === peg$FAILED) {
            if (input.substr(peg$currPos, 10) === peg$c142) {
                s1 = peg$c142;
                peg$currPos += 10;
            }
            else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c143);
                }
            }
            if (s1 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 47) {
                    s1 = peg$c22;
                    peg$currPos++;
                }
                else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c23);
                    }
                }
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c144(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parsemoduloWord() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 6) === peg$c145) {
            s1 = peg$c145;
            peg$currPos += 6;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c146);
            }
        }
        if (s1 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 37) {
                s1 = peg$c147;
                peg$currPos++;
            }
            else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c148);
                }
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c149(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parseassignmentWord() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 61) {
            s1 = peg$c103;
            peg$currPos++;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c104);
            }
        }
        if (s1 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c150) {
                s1 = peg$c150;
                peg$currPos += 2;
            }
            else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c151);
                }
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c152(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parseassignmentAdderWord() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 10) === peg$c153) {
            s1 = peg$c153;
            peg$currPos += 10;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c154);
            }
        }
        if (s1 === peg$FAILED) {
            if (input.substr(peg$currPos, 11) === peg$c155) {
                s1 = peg$c155;
                peg$currPos += 11;
            }
            else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c156);
                }
            }
            if (s1 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c157) {
                    s1 = peg$c157;
                    peg$currPos += 2;
                }
                else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c158);
                    }
                }
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c159(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parseassignmentSubtractorWord() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 11) === peg$c160) {
            s1 = peg$c160;
            peg$currPos += 11;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c161);
            }
        }
        if (s1 === peg$FAILED) {
            if (input.substr(peg$currPos, 12) === peg$c162) {
                s1 = peg$c162;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c163);
                }
            }
            if (s1 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c164) {
                    s1 = peg$c164;
                    peg$currPos += 2;
                }
                else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c165);
                    }
                }
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c166(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parseassignmentMultiplierWord() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 11) === peg$c167) {
            s1 = peg$c167;
            peg$currPos += 11;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c168);
            }
        }
        if (s1 === peg$FAILED) {
            if (input.substr(peg$currPos, 12) === peg$c169) {
                s1 = peg$c169;
                peg$currPos += 12;
            }
            else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c170);
                }
            }
            if (s1 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c171) {
                    s1 = peg$c171;
                    peg$currPos += 2;
                }
                else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c172);
                    }
                }
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c173(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parseassignmentDividerWord() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 12) === peg$c174) {
            s1 = peg$c174;
            peg$currPos += 12;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c175);
            }
        }
        if (s1 === peg$FAILED) {
            if (input.substr(peg$currPos, 13) === peg$c176) {
                s1 = peg$c176;
                peg$currPos += 13;
            }
            else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c177);
                }
            }
            if (s1 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c178) {
                    s1 = peg$c178;
                    peg$currPos += 2;
                }
                else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c179);
                    }
                }
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c180(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parseassignmentModuloWord() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 12) === peg$c181) {
            s1 = peg$c181;
            peg$currPos += 12;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c182);
            }
        }
        if (s1 === peg$FAILED) {
            if (input.substr(peg$currPos, 13) === peg$c183) {
                s1 = peg$c183;
                peg$currPos += 13;
            }
            else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c184);
                }
            }
            if (s1 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c185) {
                    s1 = peg$c185;
                    peg$currPos += 2;
                }
                else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c186);
                    }
                }
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c187(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parselastReferencedVariableWord() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c188) {
            s1 = peg$c188;
            peg$currPos += 2;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c189);
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c190(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parsenaiveEqualityWord() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c191) {
            s1 = peg$c191;
            peg$currPos += 2;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c192);
            }
        }
        if (s1 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c193) {
                s1 = peg$c193;
                peg$currPos += 2;
            }
            else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c194);
                }
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c195(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parsenaiveNonEqualityWord() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 3) === peg$c196) {
            s1 = peg$c196;
            peg$currPos += 3;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c197);
            }
        }
        if (s1 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c198) {
                s1 = peg$c198;
                peg$currPos += 2;
            }
            else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c199);
                }
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c200(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parseexactEqualityWord() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c201) {
            s1 = peg$c201;
            peg$currPos += 2;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c202);
            }
        }
        if (s1 === peg$FAILED) {
            if (input.substr(peg$currPos, 3) === peg$c203) {
                s1 = peg$c203;
                peg$currPos += 3;
            }
            else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c204);
                }
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c205(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parseexactNonEqualityWord() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 5) === peg$c206) {
            s1 = peg$c206;
            peg$currPos += 5;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c207);
            }
        }
        if (s1 === peg$FAILED) {
            if (input.substr(peg$currPos, 6) === peg$c208) {
                s1 = peg$c208;
                peg$currPos += 6;
            }
            else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c209);
                }
            }
            if (s1 === peg$FAILED) {
                if (input.substr(peg$currPos, 3) === peg$c210) {
                    s1 = peg$c210;
                    peg$currPos += 3;
                }
                else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c211);
                    }
                }
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c212(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parsearg() {
        var s0, s1, s2, s3, s4, s5, s6;
        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$parseinvocation();
        if (s1 === peg$FAILED) {
            s1 = peg$parsestring();
            if (s1 === peg$FAILED) {
                s1 = peg$parsenumber();
                if (s1 === peg$FAILED) {
                    s1 = peg$parsevariable();
                    if (s1 === peg$FAILED) {
                        s1 = peg$parsereservedWord();
                    }
                }
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$currPos;
            s3 = [];
            s4 = peg$parsews();
            while (s4 !== peg$FAILED) {
                s3.push(s4);
                s4 = peg$parsews();
            }
            if (s3 !== peg$FAILED) {
                s4 = peg$parsecomma();
                if (s4 !== peg$FAILED) {
                    s5 = [];
                    s6 = peg$parsews();
                    while (s6 !== peg$FAILED) {
                        s5.push(s6);
                        s6 = peg$parsews();
                    }
                    if (s5 !== peg$FAILED) {
                        s3 = [s3, s4, s5];
                        s2 = s3;
                    }
                    else {
                        peg$currPos = s2;
                        s2 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s2;
                    s2 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s2;
                s2 = peg$FAILED;
            }
            if (s2 === peg$FAILED) {
                s2 = [];
                s3 = peg$parsews();
                if (s3 !== peg$FAILED) {
                    while (s3 !== peg$FAILED) {
                        s2.push(s3);
                        s3 = peg$parsews();
                    }
                }
                else {
                    s2 = peg$FAILED;
                }
            }
            if (s2 === peg$FAILED) {
                s2 = null;
            }
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$c214(s1);
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c213);
            }
        }
        return s0;
    }
    function peg$parseinvocation() {
        var s0;
        s0 = peg$parseharloweStyleWithBodyInvocation();
        if (s0 === peg$FAILED) {
            s0 = peg$parseharloweStyleWithoutBodyInvocation();
            if (s0 === peg$FAILED) {
                s0 = peg$parsesugarStyleWithBodyInvocation();
                if (s0 === peg$FAILED) {
                    s0 = peg$parsesugarStyleWithoutBodyInvocation();
                }
            }
        }
        return s0;
    }
    function peg$parseharloweStyleWithoutBodyInvocation() {
        var s0, s1, s2, s3, s4, s5, s6;
        s0 = peg$currPos;
        s1 = peg$parseharloweStyleInvokeOpen();
        if (s1 !== peg$FAILED) {
            s2 = peg$parseinvokeName();
            if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 58) {
                    s3 = peg$c215;
                    peg$currPos++;
                }
                else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c216);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s4 = [];
                    s5 = peg$parsews();
                    while (s5 !== peg$FAILED) {
                        s4.push(s5);
                        s5 = peg$parsews();
                    }
                    if (s4 !== peg$FAILED) {
                        s5 = [];
                        s6 = peg$parsearg();
                        while (s6 !== peg$FAILED) {
                            s5.push(s6);
                            s6 = peg$parsearg();
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parseharloweStyleInvokeClose();
                            if (s6 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s0 = peg$c217(s2, s5);
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parseharloweStyleWithBodyInvocation() {
        var s0, s1, s2, s3, s4, s5, s6;
        s0 = peg$currPos;
        s1 = peg$parseharloweStyleWithoutBodyInvocation();
        if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$parsews();
            while (s3 !== peg$FAILED) {
                s2.push(s3);
                s3 = peg$parsews();
            }
            if (s2 !== peg$FAILED) {
                s3 = peg$currPos;
                s4 = peg$parsehookOpen();
                if (s4 !== peg$FAILED) {
                    s5 = [];
                    s6 = peg$parseallGlobalTypes();
                    while (s6 !== peg$FAILED) {
                        s5.push(s6);
                        s6 = peg$parseallGlobalTypes();
                    }
                    if (s5 !== peg$FAILED) {
                        s6 = peg$parsehookClose();
                        if (s6 !== peg$FAILED) {
                            peg$savedPos = s3;
                            s3 = peg$c218(s1, s5);
                        }
                        else {
                            peg$currPos = s3;
                            s3 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                }
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$c219(s1, s3);
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parsesugarStyleWithoutBodyInvocation() {
        var s0, s1, s2, s3, s4, s5;
        s0 = peg$currPos;
        s1 = peg$parsesugarStyleInvokeOpen();
        if (s1 !== peg$FAILED) {
            s2 = peg$parseinvokeName();
            if (s2 !== peg$FAILED) {
                s3 = [];
                s4 = peg$parsews();
                while (s4 !== peg$FAILED) {
                    s3.push(s4);
                    s4 = peg$parsews();
                }
                if (s3 !== peg$FAILED) {
                    s4 = [];
                    s5 = peg$parsearg();
                    while (s5 !== peg$FAILED) {
                        s4.push(s5);
                        s5 = peg$parsearg();
                    }
                    if (s4 !== peg$FAILED) {
                        s5 = peg$parsesugarStyleInvokeClose();
                        if (s5 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s0 = peg$c217(s2, s4);
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parsesugarStyleWithBodyInvocation() {
        var s0, s1, s2, s3, s4, s5, s6, s7;
        s0 = peg$currPos;
        s1 = peg$parsesugarStyleWithoutBodyInvocation();
        if (s1 !== peg$FAILED) {
            s2 = peg$currPos;
            s3 = [];
            s4 = peg$parseallGlobalTypes();
            while (s4 !== peg$FAILED) {
                s3.push(s4);
                s4 = peg$parseallGlobalTypes();
            }
            if (s3 !== peg$FAILED) {
                s4 = peg$parsesugarStyleInvokeOpen();
                if (s4 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 47) {
                        s5 = peg$c22;
                        peg$currPos++;
                    }
                    else {
                        s5 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c23);
                        }
                    }
                    if (s5 === peg$FAILED) {
                        if (input.substr(peg$currPos, 3) === peg$c220) {
                            s5 = peg$c220;
                            peg$currPos += 3;
                        }
                        else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c221);
                            }
                        }
                    }
                    if (s5 !== peg$FAILED) {
                        s6 = peg$parseinvokeName();
                        if (s6 !== peg$FAILED) {
                            s7 = peg$parsesugarStyleInvokeClose();
                            if (s7 !== peg$FAILED) {
                                peg$savedPos = s2;
                                s2 = peg$c222(s1, s3);
                            }
                            else {
                                peg$currPos = s2;
                                s2 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s2;
                            s2 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s2;
                        s2 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s2;
                    s2 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s2;
                s2 = peg$FAILED;
            }
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$c219(s1, s2);
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parsehookOpen() {
        var s0;
        if (input.charCodeAt(peg$currPos) === 91) {
            s0 = peg$c223;
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c224);
            }
        }
        return s0;
    }
    function peg$parsehookClose() {
        var s0;
        if (input.charCodeAt(peg$currPos) === 93) {
            s0 = peg$c60;
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c61);
            }
        }
        return s0;
    }
    function peg$parsetext() {
        var s0, s1, s2, s3, s4, s5, s6, s7;
        s0 = peg$currPos;
        s1 = peg$currPos;
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        s5 = peg$parsesugarStyleInvokeOpen();
        if (s5 === peg$FAILED) {
            s5 = peg$parseharloweStyleInvokeOpen();
            if (s5 === peg$FAILED) {
                s5 = peg$parselinkOpen();
                if (s5 === peg$FAILED) {
                    s5 = peg$currPos;
                    s6 = peg$parseelemOpenChar();
                    if (s6 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 47) {
                            s7 = peg$c22;
                            peg$currPos++;
                        }
                        else {
                            s7 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c23);
                            }
                        }
                        if (s7 === peg$FAILED) {
                            s7 = peg$parseelemKeyChar();
                        }
                        if (s7 !== peg$FAILED) {
                            s6 = [s6, s7];
                            s5 = s6;
                        }
                        else {
                            peg$currPos = s5;
                            s5 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s5;
                        s5 = peg$FAILED;
                    }
                    if (s5 === peg$FAILED) {
                        s5 = peg$parsevariableOpen();
                        if (s5 === peg$FAILED) {
                            s5 = peg$parsehookOpen();
                            if (s5 === peg$FAILED) {
                                s5 = peg$parsehookClose();
                            }
                        }
                    }
                }
            }
        }
        peg$silentFails--;
        if (s5 === peg$FAILED) {
            s4 = undefined;
        }
        else {
            peg$currPos = s4;
            s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
            s5 = peg$parseany();
            if (s5 !== peg$FAILED) {
                s4 = [s4, s5];
                s3 = s4;
            }
            else {
                peg$currPos = s3;
                s3 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s3;
            s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
            while (s3 !== peg$FAILED) {
                s2.push(s3);
                s3 = peg$currPos;
                s4 = peg$currPos;
                peg$silentFails++;
                s5 = peg$parsesugarStyleInvokeOpen();
                if (s5 === peg$FAILED) {
                    s5 = peg$parseharloweStyleInvokeOpen();
                    if (s5 === peg$FAILED) {
                        s5 = peg$parselinkOpen();
                        if (s5 === peg$FAILED) {
                            s5 = peg$currPos;
                            s6 = peg$parseelemOpenChar();
                            if (s6 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 47) {
                                    s7 = peg$c22;
                                    peg$currPos++;
                                }
                                else {
                                    s7 = peg$FAILED;
                                    if (peg$silentFails === 0) {
                                        peg$fail(peg$c23);
                                    }
                                }
                                if (s7 === peg$FAILED) {
                                    s7 = peg$parseelemKeyChar();
                                }
                                if (s7 !== peg$FAILED) {
                                    s6 = [s6, s7];
                                    s5 = s6;
                                }
                                else {
                                    peg$currPos = s5;
                                    s5 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s5;
                                s5 = peg$FAILED;
                            }
                            if (s5 === peg$FAILED) {
                                s5 = peg$parsevariableOpen();
                                if (s5 === peg$FAILED) {
                                    s5 = peg$parsehookOpen();
                                    if (s5 === peg$FAILED) {
                                        s5 = peg$parsehookClose();
                                    }
                                }
                            }
                        }
                    }
                }
                peg$silentFails--;
                if (s5 === peg$FAILED) {
                    s4 = undefined;
                }
                else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                }
                if (s4 !== peg$FAILED) {
                    s5 = peg$parseany();
                    if (s5 !== peg$FAILED) {
                        s4 = [s4, s5];
                        s3 = s4;
                    }
                    else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                }
            }
        }
        else {
            s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
            s1 = input.substring(s1, peg$currPos);
        }
        else {
            s1 = s2;
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c225(s1);
        }
        s0 = s1;
        return s0;
    }
    peg$result = peg$startRuleFunction();
    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
        return peg$result;
    }
    else {
        if (peg$result !== peg$FAILED && peg$currPos < input.length) {
            peg$fail(peg$endExpectation());
        }
        throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length
            ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
            : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
    }
}
export { peg$SyntaxError as SyntaxError, peg$parse as parse };
export default {
    SyntaxError: peg$SyntaxError,
    parse: peg$parse
};
//# sourceMappingURL=GatelyParser.js.map