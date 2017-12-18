import {
  IParser,
} from './IParser';
import {
  sugarParse,
} from './sugarParse';

export class SugarParser implements IParser {
  parse = sugarParse;
}

export default SugarParser;