import {
  TAbstractSyntaxTree,
} from '../AbstractSyntaxTree/TAbstractSyntaxTree';
import {
  IParserOptions,
} from './ParserOptions/IParserOptions';

export interface IParser {
  parse(source: string, options?: IParserOptions): TAbstractSyntaxTree;
}

export default IParser;