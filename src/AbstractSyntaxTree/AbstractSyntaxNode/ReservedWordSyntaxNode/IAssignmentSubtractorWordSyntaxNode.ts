import {
  IReservedWordSyntaxNode,
} from './IReservedWordSyntaxNode';

export interface IAssignmentSubtractorWordSyntaxNode extends IReservedWordSyntaxNode {
  subtype: 'assignmentSubtractorWord';
  source:  'minusequals' | 'minus-equals' | '-=';
}

export default IAssignmentSubtractorWordSyntaxNode;