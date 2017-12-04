import {
  IAbstractSyntaxNode,
} from './IAbstractSyntaxNode';

export interface IStringSyntaxNode extends IAbstractSyntaxNode {
  subtype: 'single' | 'double' | 'grave';
  value: string;
}

export default IStringSyntaxNode;