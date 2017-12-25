import {
  AssignmentWordSyntaxNodeSubtypes as subtypes,
} from '../AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentModuloWordSyntaxNode,
} from './IAssignmentModuloWordSyntaxNode';
import {
  isAssignmentWordSyntaxNode,
} from '../isAssignmentWordSyntaxNode';

export function isAssignmentModuloWordSyntaxNode(maybe: any): maybe is IAssignmentModuloWordSyntaxNode {
  return isAssignmentWordSyntaxNode(maybe) &&
    maybe.subtype === subtypes.AssignmentModuloWord &&
    (maybe.source === 'moduloequals' ||
      maybe.source === 'modulo-equals' ||
      maybe.source === 'modequals' ||
      maybe.source === 'mod-equals' ||
      maybe.source === '%=');
}

export default isAssignmentModuloWordSyntaxNode;