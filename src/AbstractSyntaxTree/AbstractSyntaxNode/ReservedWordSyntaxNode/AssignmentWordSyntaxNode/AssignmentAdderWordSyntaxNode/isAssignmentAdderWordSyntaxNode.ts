import {
  AssignmentWordSyntaxNodeSubtypes as subtypes,
} from '../AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentAdderWordSyntaxNode,
} from './IAssignmentAdderWordSyntaxNode';
import {
  isAssignmentWordSyntaxNode,
} from '../isAssignmentWordSyntaxNode';

export function isAssignmentAdderWordSyntaxNode(maybe: any): maybe is IAssignmentAdderWordSyntaxNode {
  return isAssignmentWordSyntaxNode(maybe) &&
    maybe.subtype === subtypes.AssignmentAdderWord &&
    (maybe.source === 'plusequals' ||
      maybe.source === 'plus-equals' ||
      maybe.source === '+=');
}

export default isAssignmentAdderWordSyntaxNode;