import {
  ITwineParserOptions,
} from './ParserOptions/ITwineParserOptions';
import {
  TAbstractSyntaxContent,
} from '../AbstractSyntaxTree/TAbstractSyntaxContent';

export type TTwineParserFunction = (str: string, options: ITwineParserOptions) => Array<TAbstractSyntaxContent>;

export default TTwineParserFunction;