import {
  IReservedWordSyntaxNode,
} from './IReservedWordSyntaxNode';

export interface IAssignmentModuloWordSyntaxNode extends IReservedWordSyntaxNode {
  subtype: 'assignmentModuloWord';
  source:  'moduloequals' | 'modulo-equals' | '%=';
}

export default IAssignmentModuloWordSyntaxNode;