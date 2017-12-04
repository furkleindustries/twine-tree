import {
  IReservedWordSyntaxNode,
} from './IReservedWordSyntaxNode';

export interface IExactEqualityWordSyntaxNode extends IReservedWordSyntaxNode {
  subtype: 'exactEqualityWord';
  source:  'is' | '===';
}

export default IExactEqualityWordSyntaxNode;