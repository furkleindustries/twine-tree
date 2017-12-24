import {
  ArithmeticAndConcatenationWordSyntaxNodeSubtypes,
} from './ArithmeticAndConcatenationWordSyntaxNodeSubtypes';
import {
  IReservedWordSyntaxNode,
} from '../IReservedWordSyntaxNode';

export interface IArithmeticAndConcatenationWordSyntaxNode extends IReservedWordSyntaxNode {
  readonly subtype: ArithmeticAndConcatenationWordSyntaxNodeSubtypes;
}

export default IArithmeticAndConcatenationWordSyntaxNode;