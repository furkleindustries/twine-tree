import {
  IParserOptions,
} from './IParserOptions';
import {
  TCssParserFunction,
} from '../TCssParserFunction';
import {
  TJavascriptParserFunction,
} from '../TJavascriptParserFunction';

export interface ITwineParserOptions extends IParserOptions {
  javascriptParse: TJavascriptParserFunction | null;
  cssParse:        TCssParserFunction | null;
}

export default ITwineParserOptions;