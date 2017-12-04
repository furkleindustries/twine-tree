import {
  IAbstractSyntaxNode,
} from './IAbstractSyntaxNode';

export interface ISourceAwareSyntaxNode extends IAbstractSyntaxNode {
  source: string;
}