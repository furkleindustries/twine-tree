import {
  IReservedWordSyntaxNode,
} from './IReservedWordSyntaxNode';

export interface IAssignmentWordSyntaxNode extends IReservedWordSyntaxNode {
  subtype: 'assignmentWord';
  source:  'to' | '=';
}

export default IAssignmentWordSyntaxNode;