import {
  AssignmentWordSyntaxNodeSubtypes as subtypes,
} from '../AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentSubtractorWordSyntaxNode,
} from './IAssignmentSubtractorWordSyntaxNode';
import {
  isAssignmentWordSyntaxNode,
} from '../isAssignmentWordSyntaxNode';

export function isAssignmentSubtractorWordSyntaxNode(maybe: any): maybe is IAssignmentSubtractorWordSyntaxNode {
  return isAssignmentWordSyntaxNode(maybe) &&
    maybe.subtype === subtypes.AssignmentSubtractorWord &&
    (maybe.source === 'minusequals' ||
      maybe.source === 'minus-equals' ||
      maybe.source === '-=');
}

export default isAssignmentSubtractorWordSyntaxNode;