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

export type ReservedWordSyntaxNodeSubtypes =
    ArithmeticAndConcatenationWordSyntaxNodeSubtypes |
    AssignmentWordSyntaxNodeSubtypes |
    ComparatorWordSyntaxNodeSubtypes |
    LastReferencedVariableWordSyntaxNodeSubtypes;

export default ReservedWordSyntaxNodeSubtypes;