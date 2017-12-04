import {
  IAbstractSyntaxNode,
} from './IAbstractSyntaxNode';

export interface INumberSyntaxNode extends IAbstractSyntaxNode {
  value: number;
}

export default INumberSyntaxNode;