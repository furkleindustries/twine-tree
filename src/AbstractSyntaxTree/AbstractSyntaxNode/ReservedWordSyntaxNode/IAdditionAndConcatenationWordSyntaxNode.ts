import {
  IReservedWordSyntaxNode,
} from './IReservedWordSyntaxNode';

export interface IAdditionAndConcatenationWordSyntaxNode extends IReservedWordSyntaxNode {
  subtype: 'additionAndConcatenationWord';
  source:  'plus' | '+';
}

export default IAdditionAndConcatenationWordSyntaxNode;