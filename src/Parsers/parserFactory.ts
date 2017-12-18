import {
  CssParser,
} from './CssParser';
import {
  GatelyParser,
} from './GatelyParser';
import {
  HarloweParser,
} from './HarloweParser';
import {
  IParser,
} from './IParser';
import {
  JavascriptParser,
} from './JavascriptParser';
import {
  SugarParser,
} from './SugarParser';

export const enum strings {
  DIALECT_INVALID =
    'The dialect argument was not a string with content.',
};

export function parserFactory(dialect: string): IParser {
  if (typeof dialect !== 'string' || !dialect) {
    throw new Error(strings.DIALECT_INVALID);
  }

  if (/^css$/i.test(dialect)) {
    return new CssParser();
  } if (/gately/i.test(dialect)) {
    return new GatelyParser();
  } else if (/harlowe/i.test(dialect)) {
    return new HarloweParser();
  } else if (/^js|javascript$/i.test(dialect)) {
    return new JavascriptParser();
  } else if (/^sugar(cane|cube)?$/i.test(dialect)) {
    return new SugarParser();
  } else {
    throw new Error('Parse type not implemented.');
  }
}

export default parserFactory;