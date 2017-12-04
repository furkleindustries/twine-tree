import { parse as cssParse, } from 'css';
import { parseModule, } from 'esprima';
import * as GatelyParser from './GatelyParser';
import * as HarloweParser from './HarloweParser';
import * as HtmlParser from './HtmlParser';
import * as SugarParser from './SugarParser';
const twineParserOpts = {
    checkVoidElements: true,
    location: true,
};
const harloweParse = (source) => {
    return HarloweParser.parse(source, twineParserOpts);
};
const htmlParse = (source) => {
    return HtmlParser.parse(source, twineParserOpts);
};
const gatelyParse = (source) => {
    return GatelyParser.parse(source, twineParserOpts);
};
const sugarParse = (source) => {
    return SugarParser.parse(source, twineParserOpts);
};
const jsParserOpts = {
    comment: true,
    loc: true,
    tokens: true,
};
const jsParse = (source) => parseModule(source, jsParserOpts);
export var strings;
(function (strings) {
    strings["DIALECT_INVALID"] = "The dialect argument was not a string.";
    strings["DIALECT_EMPTY"] = "The dialect argument was an empty string.";
})(strings || (strings = {}));
;
export function parserFactory(dialect) {
    if (typeof dialect !== 'string') {
        throw new Error("The dialect argument was not a string.");
    }
    else if (!dialect) {
        throw new Error("The dialect argument was an empty string.");
    }
    if (/^css$/i.test(dialect)) {
        return { parse: cssParse, };
    }
    if (/gately/i.test(dialect)) {
        return { parse: gatelyParse, };
    }
    else if (/harlowe/i.test(dialect)) {
        return { parse: harloweParse, };
    }
    else if (/^html$/i.test(dialect)) {
        return { parse: htmlParse, };
    }
    else if (/^js|javascript$/i.test(dialect)) {
        return { parse: jsParse, };
    }
    else if (/^sugar(cane|cube)?$/i.test(dialect)) {
        return { parse: sugarParse, };
    }
    else {
        throw new Error('Parse type not implemented.');
    }
}
export default parserFactory;
//# sourceMappingURL=parserFactory.js.map