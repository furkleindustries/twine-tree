import {
  ArithmeticAndConcatenationWordSyntaxNodeSubtypes as subtypes,
} from '../ArithmeticAndConcatenationWordSyntaxNodeSubtypes';
import {
  IAdditionAndConcatenationWordSyntaxNode,
} from './IAdditionAndConcatenationWordSyntaxNode';
import {
  isArithmeticAndConcatenationWordSyntaxNode,
} from '../isArithmeticAndConcatenationWordSyntaxNode';

export function isAdditionAndConcatenationWordSyntaxNode(maybe: any): maybe is IAdditionAndConcatenationWordSyntaxNode {
  return isArithmeticAndConcatenationWordSyntaxNode(maybe) &&
    maybe.subtype === subtypes.AdditionAndConcatenationWord &&
    (maybe.source === 'plus' || maybe.source === '+');
}

export default isAdditionAndConcatenationWordSyntaxNode;