import {
  AssignmentWordSyntaxNodeSubtypes as subtypes,
} from '../AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentMultiplicationWordSyntaxNode,
} from './IAssignmentMultiplicationWordSyntaxNode';
import {
  isAssignmentWordSyntaxNode,
} from '../isAssignmentWordSyntaxNode';

export function isAssignmentMultiplicationWordSyntaxNode(maybe: any): maybe is IAssignmentMultiplicationWordSyntaxNode {
  return isAssignmentWordSyntaxNode(maybe) &&
    maybe.subtype === subtypes.AssignmentMultiplicationWord &&
    (maybe.source === 'timesequals' ||
      maybe.source === 'times-equals' ||
      maybe.source === 'multiplyequals' ||
      maybe.source === 'multiply-equals' ||
      maybe.source === '*=');
}

export default isAssignmentMultiplicationWordSyntaxNode;