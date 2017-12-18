import {
  harloweParse,
} from './harloweParse';
import {
  IParser,
} from './IParser';

export class HarloweParser implements IParser {
  parse = harloweParse;
}

export default HarloweParser;