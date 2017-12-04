import {
  parse as cssParse,
} from 'css';
import {
  parseModule,
} from 'esprima';
import {
  IParser,
} from './IParser';
import {
  HarloweParser,
  HtmlParser,
  GatelyParser,
  SugarParser,
} from 'twine-tree';

const twineParserOpts = {
  checkVoidElements: true,
  location: true,
};

const harloweParse = (source: string) => {
  return HarloweParser.parse(source, twineParserOpts);
};

const htmlParse = (source: string) => {
  return HtmlParser.parse(source, twineParserOpts);
};

const gatelyParse = (source: string) => {
  return GatelyParser.parse(source, twineParserOpts);
};

const sugarParse = (source: string) => {
  return SugarParser.parse(source, twineParserOpts);
};

const jsParserOpts = {
  comment: true,
  loc: true,
  tokens: true,
};

const jsParse = (source: string) => parseModule(source, jsParserOpts);

export const enum strings {
  DIALECT_INVALID =
    'The dialect argument was not a string.',

  DIALECT_EMPTY =
    'The dialect argument was an empty string.',
};

export function parserFactory(dialect: string): IParser {
  if (typeof dialect !== 'string') {
    throw new Error(strings.DIALECT_INVALID);
  } else if (!dialect) {
    throw new Error(strings.DIALECT_EMPTY);
  }

  if (/^css$/i.test(dialect)) {
    return <IParser>{ parse: cssParse, };
  } if (/gately/i.test(dialect)) {
    return <IParser>{ parse: gatelyParse, };
  } else if (/harlowe/i.test(dialect)) {
    return <IParser>{ parse: harloweParse, };
  } else if (/^html$/i.test(dialect)) {
    return <IParser>{ parse: htmlParse, };
  } else if (/^js|javascript$/i.test(dialect)) {
    return <IParser>{ parse: jsParse, };
  } else if (/^sugar(cane|cube)?$/i.test(dialect)) {
    return <IParser>{ parse: sugarParse, };
  } else {
    throw new Error('Parse type not implemented.');
  }
}

export default parserFactory;