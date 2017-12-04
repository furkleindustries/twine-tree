import {
  IReservedWordSyntaxNode,
} from './IReservedWordSyntaxNode';

export interface IAssignmentAdderWordSyntaxNode extends IReservedWordSyntaxNode {
  subtype: 'assignmentAdderWord';
  source:  'plusequals' | 'plus-equals' | '+=';
}

export default IAssignmentAdderWordSyntaxNode;