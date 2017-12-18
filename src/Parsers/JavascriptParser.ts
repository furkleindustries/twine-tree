import {
  IParser,
} from './IParser';
import {
  javascriptParse,
} from './javascriptParse';

export class JavascriptParser implements IParser {
  parse = javascriptParse;
}

export default JavascriptParser;