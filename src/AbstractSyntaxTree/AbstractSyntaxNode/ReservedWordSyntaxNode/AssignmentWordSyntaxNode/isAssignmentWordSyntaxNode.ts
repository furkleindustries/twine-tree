import {
  AssignmentWordSyntaxNodeSubtypes as subtypes,
} from './AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentWordSyntaxNode,
} from './IAssignmentWordSyntaxNode';
import {
  isReservedWordSyntaxNode,
} from '../isReservedWordSyntaxNode';

export function isAssignmentWordSyntaxNode(maybe: any): maybe is IAssignmentWordSyntaxNode {
  return isReservedWordSyntaxNode(maybe) &&
    Object.values(subtypes).includes(maybe.subtype);
}

export default isAssignmentWordSyntaxNode;