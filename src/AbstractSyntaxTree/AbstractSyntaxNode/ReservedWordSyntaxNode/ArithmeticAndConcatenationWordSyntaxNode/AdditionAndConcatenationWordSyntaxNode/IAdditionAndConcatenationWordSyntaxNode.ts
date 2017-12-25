import {
  ArithmeticAndConcatenationWordSyntaxNodeSubtypes,
} from '../ArithmeticAndConcatenationWordSyntaxNodeSubtypes';
import {
  IArithmeticAndConcatenationWordSyntaxNode,
} from '../IArithmeticAndConcatenationWordSyntaxNode';

export interface IAdditionAndConcatenationWordSyntaxNode extends IArithmeticAndConcatenationWordSyntaxNode {
  readonly subtype: ArithmeticAndConcatenationWordSyntaxNodeSubtypes.AdditionAndConcatenationWord;
  readonly source:  'plus' | '+';
}

export default IAdditionAndConcatenationWordSyntaxNode;