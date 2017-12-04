import {
  IReservedWordSyntaxNode,
} from './IReservedWordSyntaxNode';

export interface INaiveNonEqualityWordSyntaxNode extends IReservedWordSyntaxNode {
  subtype: 'naiveNonEqualityWord';
  source:  'neq' | '!=';
}

export default INaiveNonEqualityWordSyntaxNode;