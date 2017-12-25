import {
  ArithmeticAndConcatenationWordSyntaxNodeSubtypes as subtypes,
} from '../ArithmeticAndConcatenationWordSyntaxNodeSubtypes';
import {
  IDivisionWordSyntaxNode,
} from './IDivisionWordSyntaxNode';
import {
  isArithmeticAndConcatenationWordSyntaxNode,
} from '../isArithmeticAndConcatenationWordSyntaxNode';

export function isDivisionWordSyntaxNode(maybe: any): maybe is IDivisionWordSyntaxNode {
  return isArithmeticAndConcatenationWordSyntaxNode(maybe) &&
    maybe.subtype === subtypes.DivisionWord &&
    (maybe.source === 'dividedby' ||
      maybe.source === 'divided-by' ||
      maybe.source === '/');
}

export default isDivisionWordSyntaxNode;