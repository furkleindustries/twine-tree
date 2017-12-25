import {
  ArithmeticAndConcatenationWordSyntaxNodeSubtypes as subtypes,
} from '../ArithmeticAndConcatenationWordSyntaxNodeSubtypes';
import {
  IMultiplicationWordSyntaxNode,
} from './IMultiplicationWordSyntaxNode';
import {
  isArithmeticAndConcatenationWordSyntaxNode,
} from '../isArithmeticAndConcatenationWordSyntaxNode';

export function isModuloWordSyntaxNode(maybe: any): maybe is IMultiplicationWordSyntaxNode {
  return isArithmeticAndConcatenationWordSyntaxNode(maybe) &&
    maybe.subtype === subtypes.MultiplicationWord &&
    (maybe.source === 'times' ||
      maybe.source === 'multipliedby' ||
      maybe.source === 'multiplied-by' ||
      maybe.source === '*');
}

export default isModuloWordSyntaxNode;