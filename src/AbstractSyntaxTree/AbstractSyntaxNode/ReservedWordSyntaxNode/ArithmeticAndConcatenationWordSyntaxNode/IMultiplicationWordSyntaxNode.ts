import {
  ArithmeticAndConcatenationWordSyntaxNodeSubtypes,
} from './ArithmeticAndConcatenationWordSyntaxNodeSubtypes';
import {
  IReservedWordSyntaxNode,
} from '../IReservedWordSyntaxNode';

export interface IMultiplicationWordSyntaxNode extends IReservedWordSyntaxNode {
  readonly subtype: ArithmeticAndConcatenationWordSyntaxNodeSubtypes.MultiplicationWord;
  readonly source:  'times' | 'multipliedby' | 'multiplied-by' | '*';
}

export default IMultiplicationWordSyntaxNode;