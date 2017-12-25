import {
  ArithmeticAndConcatenationWordSyntaxNodeSubtypes,
} from './ArithmeticAndConcatenationWordSyntaxNode/ArithmeticAndConcatenationWordSyntaxNodeSubtypes';
import {
  AssignmentWordSyntaxNodeSubtypes,
} from './AssignmentWordSyntaxNode/AssignmentWordSyntaxNodeSubtypes';
import {
  ComparatorWordSyntaxNodeSubtypes,
} from './ComparatorWordSyntaxNode/ComparatorWordSyntaxNodeSubtypes';
import {
  LastReferencedVariableWordSyntaxNodeSubtypes,
} from './LastReferencedVariableWordSyntaxNode/LastReferencedVariableWordSyntaxNodeSubtypes';
import {
  ReservedWordSyntaxNodeSubtypes,
} from './ReservedWordSyntaxNodeSubtypes';

const rwSubtypes =
  Object.values(ArithmeticAndConcatenationWordSyntaxNodeSubtypes)
    .concat(Object.values(AssignmentWordSyntaxNodeSubtypes))
    .concat(Object.values(ComparatorWordSyntaxNodeSubtypes))
    .concat(Object.values(LastReferencedVariableWordSyntaxNodeSubtypes));

export function isReservedWordSyntaxNodeSubtype(maybe: any): maybe is ReservedWordSyntaxNodeSubtypes {
  return rwSubtypes.includes(maybe);
}

export default isReservedWordSyntaxNodeSubtype;