import {
  TAbstractSyntaxTree,
} from '../AbstractSyntaxTree/TAbstractSyntaxTree';

export interface IParser {
  parse(source: string, options?: Object): TAbstractSyntaxTree;
}

export default IParser;