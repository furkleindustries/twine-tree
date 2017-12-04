import {
  IReservedWordSyntaxNode,
} from './IReservedWordSyntaxNode';

export interface ISubtractionWordSyntaxNode extends IReservedWordSyntaxNode {
  subtype: 'subtractionWord';
  source:  'minus' | '-';
}

export default ISubtractionWordSyntaxNode;