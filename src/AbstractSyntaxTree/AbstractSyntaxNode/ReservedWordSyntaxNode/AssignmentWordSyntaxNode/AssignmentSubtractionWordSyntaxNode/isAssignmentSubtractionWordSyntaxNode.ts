import {
  AssignmentWordSyntaxNodeSubtypes as subtypes,
} from '../AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentSubtractionWordSyntaxNode,
} from './IAssignmentSubtractionWordSyntaxNode';
import {
  isAssignmentWordSyntaxNode,
} from '../isAssignmentWordSyntaxNode';

export function isAssignmentSubtractorWordSyntaxNode(maybe: any): maybe is IAssignmentSubtractionWordSyntaxNode {
  return isAssignmentWordSyntaxNode(maybe) &&
    maybe.subtype === subtypes.AssignmentSubtractionWord &&
    (maybe.source === 'minusequals' ||
      maybe.source === 'minus-equals' ||
      maybe.source === '-=');
}

export default isAssignmentSubtractorWordSyntaxNode;