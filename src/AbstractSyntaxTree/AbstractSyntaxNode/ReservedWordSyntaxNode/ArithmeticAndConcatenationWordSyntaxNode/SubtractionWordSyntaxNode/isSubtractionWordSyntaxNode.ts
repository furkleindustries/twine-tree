import {
  ArithmeticAndConcatenationWordSyntaxNodeSubtypes as subtypes,
} from '../ArithmeticAndConcatenationWordSyntaxNodeSubtypes';
import {
  ISubtractionWordSyntaxNode,
} from './ISubtractionWordSyntaxNode';
import {
  isArithmeticAndConcatenationWordSyntaxNode,
} from '../isArithmeticAndConcatenationWordSyntaxNode';

export function isSubtractionWordSyntaxNode(maybe: any): maybe is ISubtractionWordSyntaxNode {
  return isArithmeticAndConcatenationWordSyntaxNode(maybe) &&
    maybe.subtype === subtypes.SubtractionWord &&
    (maybe.source === 'minus' || maybe.source === '-');
}

export default isSubtractionWordSyntaxNode;