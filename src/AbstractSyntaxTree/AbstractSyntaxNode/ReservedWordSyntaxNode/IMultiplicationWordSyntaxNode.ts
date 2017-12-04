import {
  IReservedWordSyntaxNode,
} from './IReservedWordSyntaxNode';

export interface IMultiplicationWordSyntaxNode extends IReservedWordSyntaxNode {
  subtype: 'multiplicationWord';
  source:  'times' | 'multipliedby' | 'multiplied-by' | '*';
}

export default IMultiplicationWordSyntaxNode;