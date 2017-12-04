import {
  IReservedWordSyntaxNode,
} from './IReservedWordSyntaxNode';

export interface IAssignmentDividerWordSyntaxNode extends IReservedWordSyntaxNode {
  subtype: 'assignmentDividerWord';
  source:  'divideequals' | 'divide-equals' | '/=';
}

export default IAssignmentDividerWordSyntaxNode;