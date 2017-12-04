import {
  IReservedWordSyntaxNode,
} from './IReservedWordSyntaxNode';

export interface INaiveEqualityWordSyntaxNode extends IReservedWordSyntaxNode {
  subtype: 'naiveEqualityWord';
  source:  'eq' | '==';
}

export default INaiveEqualityWordSyntaxNode;