import {
  gatelyParse,
} from './gatelyParse';
import {
  IParser,
} from './IParser';

export class GatelyParser implements IParser {
  parse = gatelyParse;
}

export default GatelyParser;