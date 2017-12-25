import {
  ArithmeticAndConcatenationWordSyntaxNodeSubtypes as subtypes,
} from '../ArithmeticAndConcatenationWordSyntaxNodeSubtypes';
import {
  IModuloWordSyntaxNode,
} from './IModuloWordSyntaxNode';
import {
  isArithmeticAndConcatenationWordSyntaxNode,
} from '../isArithmeticAndConcatenationWordSyntaxNode';

export function isModuloWordSyntaxNode(maybe: any): maybe is IModuloWordSyntaxNode {
  return isArithmeticAndConcatenationWordSyntaxNode(maybe) &&
    maybe.subtype === subtypes.ModuloWord &&
    (maybe.source === 'modulo' ||
      maybe.source === 'mod' ||
      maybe.source === '%');
}

export default isModuloWordSyntaxNode;