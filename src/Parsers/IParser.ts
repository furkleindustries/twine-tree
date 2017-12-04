import {
  TAbstractSyntaxTree,
} from '../AbstractSyntaxTree/TAbstractSyntaxTree';

export interface IParser {
  parse(source: string): TAbstractSyntaxTree;
}

export default IParser;