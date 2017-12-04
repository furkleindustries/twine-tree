import {
  IReservedWordSyntaxNode,
} from './IReservedWordSyntaxNode';

export interface IExactNonEqualityWordSyntaxNode extends IReservedWordSyntaxNode {
  subtype: 'exactNonEqualityWord';
  source:  'isnot' | 'is-not' | '!==';
}

export default IExactNonEqualityWordSyntaxNode;