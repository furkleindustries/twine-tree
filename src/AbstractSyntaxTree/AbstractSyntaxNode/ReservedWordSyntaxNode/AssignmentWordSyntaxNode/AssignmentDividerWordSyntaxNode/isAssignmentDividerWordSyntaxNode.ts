import {
  AssignmentWordSyntaxNodeSubtypes as subtypes,
} from '../AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentDividerWordSyntaxNode,
} from './IAssignmentDividerWordSyntaxNode';
import {
  isAssignmentWordSyntaxNode,
} from '../isAssignmentWordSyntaxNode';

export function isAssignmentDividerWordSyntaxNode(maybe: any): maybe is IAssignmentDividerWordSyntaxNode {
  return isAssignmentWordSyntaxNode(maybe) &&
    maybe.subtype === subtypes.AssignmentDividerWord &&
    (maybe.source === 'divideequals' ||
      maybe.source === 'divide-equals' ||
      maybe.source === '/=');
}

export default isAssignmentDividerWordSyntaxNode;