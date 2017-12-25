import {
  ArithmeticAndConcatenationWordSyntaxNodeSubtypes as subs,
} from './ArithmeticAndConcatenationWordSyntaxNodeSubtypes';
import {
  IArithmeticAndConcatenationWordSyntaxNode,
} from './IArithmeticAndConcatenationWordSyntaxNode';
import {
  isReservedWordSyntaxNode,
} from '../isReservedWordSyntaxNode';

export function isArithmeticAndConcatenationWordSyntaxNode(maybe: any): maybe is IArithmeticAndConcatenationWordSyntaxNode {
  return isReservedWordSyntaxNode(maybe) &&
    Object.values(subs).includes((<any>maybe).subtype);
}

export default isArithmeticAndConcatenationWordSyntaxNode;