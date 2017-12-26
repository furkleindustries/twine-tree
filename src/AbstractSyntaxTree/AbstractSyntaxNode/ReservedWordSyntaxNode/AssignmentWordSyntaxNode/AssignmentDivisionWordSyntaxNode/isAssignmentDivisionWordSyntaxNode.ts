import {
  AssignmentWordSyntaxNodeSubtypes as subtypes,
} from '../AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentDivisionWordSyntaxNode,
} from './IAssignmentDivisionWordSyntaxNode';
import {
  isAssignmentWordSyntaxNode,
} from '../isAssignmentWordSyntaxNode';

export function isAssignmentDivisionWordSyntaxNode(maybe: any): maybe is IAssignmentDivisionWordSyntaxNode {
  return isAssignmentWordSyntaxNode(maybe) &&
    maybe.subtype === subtypes.AssignmentDivisionWord &&
    (maybe.source === 'divideequals' ||
      maybe.source === 'divide-equals' ||
      maybe.source === '/=');
}

export default isAssignmentDivisionWordSyntaxNode;