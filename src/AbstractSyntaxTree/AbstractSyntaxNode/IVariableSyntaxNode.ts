import {
  IAbstractSyntaxNode,
} from './IAbstractSyntaxNode';

export interface IVariableSyntaxNode extends IAbstractSyntaxNode {
  name: string;
}