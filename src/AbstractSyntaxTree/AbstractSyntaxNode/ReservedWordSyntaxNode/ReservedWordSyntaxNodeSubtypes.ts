import {
  ArithmeticAndConcatenationWordSyntaxNodeSubtypes,
} from './ArithmeticAndConcatenationWordSyntaxNode/ArithmeticAndConcatenationWordSyntaxNodeSubtypes';
import {
  AssignmentWordSyntaxNodeSubtypes,
} from './AssignmentWordSyntaxNode/AssignmentWordSyntaxNodeSubtypes';
import {
  ComparatorWordSyntaxNodeSubtypes,
} from './ComparatorWordSyntaxNode/ComparatorWordSyntaxNodeSubtypes';

export type ReservedWordSyntaxNodeSubtypes =
    ArithmeticAndConcatenationWordSyntaxNodeSubtypes |
    AssignmentWordSyntaxNodeSubtypes |
    ComparatorWordSyntaxNodeSubtypes |
    'lastReferencedVariableWord';

export default ReservedWordSyntaxNodeSubtypes;