import {
  ArithmeticAndConcatenationWordSyntaxNodeSubtypes,
} from '../ArithmeticAndConcatenationWordSyntaxNodeSubtypes';
import {
  IArithmeticAndConcatenationWordSyntaxNode,
} from '../IArithmeticAndConcatenationWordSyntaxNode';

export interface IDivisionWordSyntaxNode extends IArithmeticAndConcatenationWordSyntaxNode {
  readonly subtype: ArithmeticAndConcatenationWordSyntaxNodeSubtypes.DivisionWord;
  readonly source:  'dividedby' | 'divided-by' | '/';
}

export default IDivisionWordSyntaxNode;