import {
  AssignmentWordSyntaxNodeSubtypes as subtypes,
} from '../AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentAdditionWordSyntaxNode,
} from './IAssignmentAdditionWordSyntaxNode';
import {
  isAssignmentWordSyntaxNode,
} from '../isAssignmentWordSyntaxNode';

export function isAssignmentAdditionWordSyntaxNode(maybe: any): maybe is IAssignmentAdditionWordSyntaxNode {
  return isAssignmentWordSyntaxNode(maybe) &&
    maybe.subtype === subtypes.AssignmentAdditionWord &&
    (maybe.source === 'plusequals' ||
      maybe.source === 'plus-equals' ||
      maybe.source === '+=');
}

export default isAssignmentAdditionWordSyntaxNode;