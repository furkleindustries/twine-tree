import {
  IAbstractSyntaxNode,
} from './IAbstractSyntaxNode';

export interface IStringSyntaxNode extends IAbstractSyntaxNode {
  subtype: 'singleQuote' | 'doubleQuote' | 'grave';
  value: string;
}

export default IStringSyntaxNode;