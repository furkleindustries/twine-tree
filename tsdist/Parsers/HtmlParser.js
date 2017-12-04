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
    var peg$c4 = "\"";
    var peg$c5 = peg$literalExpectation("\"", false);
    var peg$c6 = "'";
    var peg$c7 = peg$literalExpectation("'", false);
    var peg$c8 = function (text) {
        const node = {
            type: 'string',
            subtype: 'single',
            value: text,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c9 = function (text) {
        const node = {
            type: 'string',
            subtype: 'double',
            value: text,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c10 = function (c) {
        return c;
    };
    var peg$c11 = peg$otherExpectation("character");
    var peg$c12 = "\\";
    var peg$c13 = peg$literalExpectation("\\", false);
    var peg$c14 = "/";
    var peg$c15 = peg$literalExpectation("/", false);
    var peg$c16 = "b";
    var peg$c17 = peg$literalExpectation("b", false);
    var peg$c18 = function () { return '\b'; };
    var peg$c19 = "f";
    var peg$c20 = peg$literalExpectation("f", false);
    var peg$c21 = function () { return '\f'; };
    var peg$c22 = "n";
    var peg$c23 = peg$literalExpectation("n", false);
    var peg$c24 = function () { return '\n'; };
    var peg$c25 = "r";
    var peg$c26 = peg$literalExpectation("r", false);
    var peg$c27 = function () { return '\r'; };
    var peg$c28 = "t";
    var peg$c29 = peg$literalExpectation("t", false);
    var peg$c30 = function () { return '\t'; };
    var peg$c31 = "u";
    var peg$c32 = peg$literalExpectation("u", false);
    var peg$c33 = function (digits) {
        return String.fromCharCode(parseInt(digits, 16));
    };
    var peg$c34 = function (sequence) {
        return sequence;
    };
    var peg$c35 = /^[ -!#-[\]-\u10FFFF]/;
    var peg$c36 = peg$classExpectation([[" ", "!"], ["#", "["], ["]", "\u10FF"], "F", "F"], false, false);
    var peg$c37 = function (elem) {
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
    var peg$c38 = "<script";
    var peg$c39 = peg$literalExpectation("<script", false);
    var peg$c40 = ">";
    var peg$c41 = peg$literalExpectation(">", false);
    var peg$c42 = "</script>";
    var peg$c43 = peg$literalExpectation("</script>", false);
    var peg$c44 = "</script";
    var peg$c45 = peg$literalExpectation("</script", false);
    var peg$c46 = function (attrs, contents) {
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
    };
    var peg$c47 = "<style";
    var peg$c48 = peg$literalExpectation("<style", false);
    var peg$c49 = "</style>";
    var peg$c50 = peg$literalExpectation("</style>", false);
    var peg$c51 = "</style";
    var peg$c52 = peg$literalExpectation("</style", false);
    var peg$c53 = function (attrs, contents) {
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
    };
    var peg$c54 = function (attrs) { return attrs; };
    var peg$c55 = function (attrs) {
        return attrs;
    };
    var peg$c56 = peg$otherExpectation("voidElement");
    var peg$c57 = function (tagName, attrs) {
        if (typeof options.voidElements === 'object' &&
            options.voidElements &&
            !options.voidElements[tagName.toLowerCase()]) {
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
    };
    var peg$c58 = peg$otherExpectation("elementWithTwoTags");
    var peg$c59 = function (tagName, attrs, children) {
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
    };
    var peg$c60 = peg$otherExpectation("elementOpeningCharacter");
    var peg$c61 = "<";
    var peg$c62 = peg$literalExpectation("<", false);
    var peg$c63 = peg$otherExpectation("elementClosingCharacter");
    var peg$c64 = peg$otherExpectation("elementTagNameOrAttributeKey");
    var peg$c65 = peg$otherExpectation("Element key character");
    var peg$c66 = /^[a-zA-Z\-]/;
    var peg$c67 = peg$classExpectation([["a", "z"], ["A", "Z"], "-"], false, false);
    var peg$c68 = peg$otherExpectation("elementTagName");
    var peg$c69 = peg$otherExpectation("elementAttribute");
    var peg$c70 = "=";
    var peg$c71 = peg$literalExpectation("=", false);
    var peg$c72 = function (key, value) { return value; };
    var peg$c73 = function (key, attrValue) {
        const node = {
            type: 'elementAttribute',
            key,
            value: (attrValue || {}).value || '',
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c74 = peg$otherExpectation("elementAttributeKey");
    var peg$c75 = peg$otherExpectation("elementAttributeValue");
    var peg$c76 = "-->";
    var peg$c77 = peg$literalExpectation("-->", false);
    var peg$c78 = function (val) { return val; };
    var peg$c79 = function ($value) {
        const node = {
            type: 'comment',
            value,
        };
        if (options.location === true) {
            node.location = location();
        }
        return node;
    };
    var peg$c80 = "<!--";
    var peg$c81 = peg$literalExpectation("<!--", false);
    var peg$c82 = /^[0-9a-f]/i;
    var peg$c83 = peg$classExpectation([["0", "9"], ["a", "f"]], false, true);
    var peg$c84 = function (characters) {
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
        s1 = peg$parseelem();
        if (s1 === peg$FAILED) {
            s1 = peg$parsetext();
        }
        if (s1 !== peg$FAILED) {
            while (s1 !== peg$FAILED) {
                s0.push(s1);
                s1 = peg$parseelem();
                if (s1 === peg$FAILED) {
                    s1 = peg$parsetext();
                }
            }
        }
        else {
            s0 = peg$FAILED;
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
    function peg$parsedoubleQuote() {
        var s0;
        if (input.charCodeAt(peg$currPos) === 34) {
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
    function peg$parsesingleQuote() {
        var s0;
        if (input.charCodeAt(peg$currPos) === 39) {
            s0 = peg$c6;
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c7);
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
                    s0 = peg$c8(s2);
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
                        s0 = peg$c9(s2);
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
                s0 = peg$c10(s2);
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
                s0 = peg$c10(s2);
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
                peg$fail(peg$c11);
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
                        s2 = peg$c12;
                        peg$currPos++;
                    }
                    else {
                        s2 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c13);
                        }
                    }
                    if (s2 === peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 47) {
                            s2 = peg$c14;
                            peg$currPos++;
                        }
                        else {
                            s2 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c15);
                            }
                        }
                        if (s2 === peg$FAILED) {
                            s2 = peg$currPos;
                            if (input.charCodeAt(peg$currPos) === 98) {
                                s3 = peg$c16;
                                peg$currPos++;
                            }
                            else {
                                s3 = peg$FAILED;
                                if (peg$silentFails === 0) {
                                    peg$fail(peg$c17);
                                }
                            }
                            if (s3 !== peg$FAILED) {
                                peg$savedPos = s2;
                                s3 = peg$c18();
                            }
                            s2 = s3;
                            if (s2 === peg$FAILED) {
                                s2 = peg$currPos;
                                if (input.charCodeAt(peg$currPos) === 102) {
                                    s3 = peg$c19;
                                    peg$currPos++;
                                }
                                else {
                                    s3 = peg$FAILED;
                                    if (peg$silentFails === 0) {
                                        peg$fail(peg$c20);
                                    }
                                }
                                if (s3 !== peg$FAILED) {
                                    peg$savedPos = s2;
                                    s3 = peg$c21();
                                }
                                s2 = s3;
                                if (s2 === peg$FAILED) {
                                    s2 = peg$currPos;
                                    if (input.charCodeAt(peg$currPos) === 110) {
                                        s3 = peg$c22;
                                        peg$currPos++;
                                    }
                                    else {
                                        s3 = peg$FAILED;
                                        if (peg$silentFails === 0) {
                                            peg$fail(peg$c23);
                                        }
                                    }
                                    if (s3 !== peg$FAILED) {
                                        peg$savedPos = s2;
                                        s3 = peg$c24();
                                    }
                                    s2 = s3;
                                    if (s2 === peg$FAILED) {
                                        s2 = peg$currPos;
                                        if (input.charCodeAt(peg$currPos) === 114) {
                                            s3 = peg$c25;
                                            peg$currPos++;
                                        }
                                        else {
                                            s3 = peg$FAILED;
                                            if (peg$silentFails === 0) {
                                                peg$fail(peg$c26);
                                            }
                                        }
                                        if (s3 !== peg$FAILED) {
                                            peg$savedPos = s2;
                                            s3 = peg$c27();
                                        }
                                        s2 = s3;
                                        if (s2 === peg$FAILED) {
                                            s2 = peg$currPos;
                                            if (input.charCodeAt(peg$currPos) === 116) {
                                                s3 = peg$c28;
                                                peg$currPos++;
                                            }
                                            else {
                                                s3 = peg$FAILED;
                                                if (peg$silentFails === 0) {
                                                    peg$fail(peg$c29);
                                                }
                                            }
                                            if (s3 !== peg$FAILED) {
                                                peg$savedPos = s2;
                                                s3 = peg$c30();
                                            }
                                            s2 = s3;
                                            if (s2 === peg$FAILED) {
                                                s2 = peg$currPos;
                                                if (input.charCodeAt(peg$currPos) === 117) {
                                                    s3 = peg$c31;
                                                    peg$currPos++;
                                                }
                                                else {
                                                    s3 = peg$FAILED;
                                                    if (peg$silentFails === 0) {
                                                        peg$fail(peg$c32);
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
                                                        s2 = peg$c33(s4);
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
                s0 = peg$c34(s2);
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
        if (peg$c35.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c36);
            }
        }
        return s0;
    }
    function peg$parseescapeCharacter() {
        var s0;
        if (input.charCodeAt(peg$currPos) === 92) {
            s0 = peg$c12;
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c13);
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
            s1 = peg$c37(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parsescript() {
        var s0, s1, s2, s3, s4, s5, s6, s7;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 7) === peg$c38) {
            s1 = peg$c38;
            peg$currPos += 7;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c39);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parsescriptOrStyleAttrs();
            if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 62) {
                    s3 = peg$c40;
                    peg$currPos++;
                }
                else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c41);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s4 = [];
                    s5 = peg$currPos;
                    s6 = peg$currPos;
                    peg$silentFails++;
                    if (input.substr(peg$currPos, 9) === peg$c42) {
                        s7 = peg$c42;
                        peg$currPos += 9;
                    }
                    else {
                        s7 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c43);
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
                        if (input.substr(peg$currPos, 9) === peg$c42) {
                            s7 = peg$c42;
                            peg$currPos += 9;
                        }
                        else {
                            s7 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c43);
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
                        if (input.substr(peg$currPos, 8) === peg$c44) {
                            s5 = peg$c44;
                            peg$currPos += 8;
                        }
                        else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c45);
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
                                    s0 = peg$c46(s2, s4);
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
        if (input.substr(peg$currPos, 6) === peg$c47) {
            s1 = peg$c47;
            peg$currPos += 6;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c48);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parsescriptOrStyleAttrs();
            if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 62) {
                    s3 = peg$c40;
                    peg$currPos++;
                }
                else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c41);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s4 = peg$currPos;
                    s5 = [];
                    s6 = peg$currPos;
                    s7 = peg$currPos;
                    peg$silentFails++;
                    if (input.substr(peg$currPos, 8) === peg$c49) {
                        s8 = peg$c49;
                        peg$currPos += 8;
                    }
                    else {
                        s8 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c50);
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
                        if (input.substr(peg$currPos, 8) === peg$c49) {
                            s8 = peg$c49;
                            peg$currPos += 8;
                        }
                        else {
                            s8 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c50);
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
                        if (input.substr(peg$currPos, 7) === peg$c51) {
                            s5 = peg$c51;
                            peg$currPos += 7;
                        }
                        else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c52);
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
                                    s0 = peg$c53(s2, s4);
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
                s2 = peg$c54(s4);
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
                    s2 = peg$c54(s4);
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
            s1 = peg$c55(s1);
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
                            s5 = peg$c14;
                            peg$currPos++;
                        }
                        else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c15);
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
                                    s0 = peg$c57(s2, s4);
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
                peg$fail(peg$c56);
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
                                        s0 = peg$c59(s2, s4, s7);
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
                peg$fail(peg$c58);
            }
        }
        return s0;
    }
    function peg$parseelemOpenChar() {
        var s0, s1;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 60) {
            s0 = peg$c61;
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c62);
            }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c60);
            }
        }
        return s0;
    }
    function peg$parseelemCloseChar() {
        var s0, s1;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 62) {
            s0 = peg$c40;
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c41);
            }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c63);
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
                peg$fail(peg$c64);
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
            s2 = peg$c40;
            peg$currPos++;
        }
        else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c41);
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
            if (peg$c66.test(input.charAt(peg$currPos))) {
                s3 = input.charAt(peg$currPos);
                peg$currPos++;
            }
            else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c67);
                }
            }
            if (s3 !== peg$FAILED) {
                while (s3 !== peg$FAILED) {
                    s2.push(s3);
                    if (peg$c66.test(input.charAt(peg$currPos))) {
                        s3 = input.charAt(peg$currPos);
                        peg$currPos++;
                    }
                    else {
                        s3 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c67);
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
                peg$fail(peg$c65);
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
                peg$fail(peg$c68);
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
                s3 = peg$c70;
                peg$currPos++;
            }
            else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c71);
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
                        s2 = peg$c72(s1, s4);
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
                    s0 = peg$c73(s1, s2);
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
                peg$fail(peg$c69);
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
                peg$fail(peg$c74);
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
                peg$fail(peg$c75);
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
        s1 = peg$parseelem();
        if (s1 === peg$FAILED) {
            s1 = peg$parsecomment();
            if (s1 === peg$FAILED) {
                s1 = peg$parsetext();
            }
        }
        while (s1 !== peg$FAILED) {
            s0.push(s1);
            s1 = peg$parseelem();
            if (s1 === peg$FAILED) {
                s1 = peg$parsecomment();
                if (s1 === peg$FAILED) {
                    s1 = peg$parsetext();
                }
            }
        }
        return s0;
    }
    function peg$parseelemClose() {
        var s0, s1, s2, s3, s4, s5;
        s0 = peg$currPos;
        s1 = peg$parseelemOpenChar();
        if (s1 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 47) {
                s2 = peg$c14;
                peg$currPos++;
            }
            else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c15);
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
    function peg$parsecomment() {
        var s0, s1, s2, s3, s4, s5;
        s0 = peg$currPos;
        s1 = peg$parsecommentOpen();
        if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$currPos;
            s4 = peg$currPos;
            peg$silentFails++;
            if (input.substr(peg$currPos, 3) === peg$c76) {
                s5 = peg$c76;
                peg$currPos += 3;
            }
            else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c77);
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
                    s3 = peg$c78(s5);
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
                if (input.substr(peg$currPos, 3) === peg$c76) {
                    s5 = peg$c76;
                    peg$currPos += 3;
                }
                else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c77);
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
                        s3 = peg$c78(s5);
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
                    s0 = peg$c79(s2);
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
        if (input.substr(peg$currPos, 4) === peg$c80) {
            s0 = peg$c80;
            peg$currPos += 4;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c81);
            }
        }
        return s0;
    }
    function peg$parsecommentClose() {
        var s0;
        if (input.substr(peg$currPos, 3) === peg$c76) {
            s0 = peg$c76;
            peg$currPos += 3;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c77);
            }
        }
        return s0;
    }
    function peg$parseHEXDIG() {
        var s0;
        if (peg$c82.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c83);
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
        s5 = peg$currPos;
        s6 = peg$parseelemOpenChar();
        if (s6 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 47) {
                s7 = peg$c14;
                peg$currPos++;
            }
            else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c15);
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
                s5 = peg$currPos;
                s6 = peg$parseelemOpenChar();
                if (s6 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 47) {
                        s7 = peg$c14;
                        peg$currPos++;
                    }
                    else {
                        s7 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c15);
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
            s1 = peg$c84(s1);
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
//# sourceMappingURL=HtmlParser.js.map