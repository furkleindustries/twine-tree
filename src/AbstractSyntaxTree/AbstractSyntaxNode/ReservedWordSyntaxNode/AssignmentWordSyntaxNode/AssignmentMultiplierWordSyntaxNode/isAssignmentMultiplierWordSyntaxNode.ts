import {
  AssignmentWordSyntaxNodeSubtypes as subtypes,
} from '../AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentMultiplierWordSyntaxNode,
} from './IAssignmentMultiplierWordSyntaxNode';
import {
  isAssignmentWordSyntaxNode,
} from '../isAssignmentWordSyntaxNode';

export function isAssignmentMultiplierWordSyntaxNode(maybe: any): maybe is IAssignmentMultiplierWordSyntaxNode {
  return isAssignmentWordSyntaxNode(maybe) &&
    maybe.subtype === subtypes.AssignmentMultiplierWord &&
    (maybe.source === 'timesequals' ||
      maybe.source === 'times-equals' ||
      maybe.source === 'multiplyequals' ||
      maybe.source === 'multiply-equals' ||
      maybe.source === '*=');
}

export default isAssignmentMultiplierWordSyntaxNode;