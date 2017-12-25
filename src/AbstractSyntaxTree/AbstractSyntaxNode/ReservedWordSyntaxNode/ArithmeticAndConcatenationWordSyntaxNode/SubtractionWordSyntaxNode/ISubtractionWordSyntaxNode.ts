import {
  ArithmeticAndConcatenationWordSyntaxNodeSubtypes,
} from '../ArithmeticAndConcatenationWordSyntaxNodeSubtypes';
import {
  IArithmeticAndConcatenationWordSyntaxNode,
} from '../IArithmeticAndConcatenationWordSyntaxNode';

export interface ISubtractionWordSyntaxNode extends IArithmeticAndConcatenationWordSyntaxNode {
  readonly subtype: ArithmeticAndConcatenationWordSyntaxNodeSubtypes.SubtractionWord;
  readonly source:  'minus' | '-';
}

export default ISubtractionWordSyntaxNode;