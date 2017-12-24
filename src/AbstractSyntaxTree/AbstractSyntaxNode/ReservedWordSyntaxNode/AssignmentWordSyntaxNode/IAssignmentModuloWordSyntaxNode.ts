import {
  AssignmentWordSyntaxNodeSubtypes,
} from './AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentWordSyntaxNode,
} from './IAssignmentWordSyntaxNode';

export interface IAssignmentModuloWordSyntaxNode extends IAssignmentWordSyntaxNode {
  readonly subtype: AssignmentWordSyntaxNodeSubtypes.AssignmentModuloWord;
  readonly source:  'moduloequals' | 'modulo-equals' | '%=';
}

export default IAssignmentModuloWordSyntaxNode;