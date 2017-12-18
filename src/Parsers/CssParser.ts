import {
  cssParse,
} from './cssParse';
import {
  IParser,
} from './IParser';

export class CssParser implements IParser {
  parse = cssParse;
}

export default CssParser;