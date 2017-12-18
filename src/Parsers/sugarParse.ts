import {
  parse,
} from './SugarGeneratedParser';
import {
  TAbstractSyntaxContent,
} from '../AbstractSyntaxTree/TAbstractSyntaxContent';
import {
  ITwineParserOptions,
} from './ParserOptions/ITwineParserOptions';
import {
  TwineParserOptions,
} from './ParserOptions/TwineParserOptions';

export function sugarParse(src: string, options: ITwineParserOptions = new TwineParserOptions()): Array<TAbstractSyntaxContent> {
  return parse(src, options);
}

export default sugarParse;