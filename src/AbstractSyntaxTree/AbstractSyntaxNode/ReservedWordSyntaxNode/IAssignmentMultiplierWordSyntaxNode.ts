import {
  IReservedWordSyntaxNode,
} from './IReservedWordSyntaxNode';

export interface IAssignmentMultiplierWordSyntaxNode extends IReservedWordSyntaxNode {
  subtype: 'assignmentMultiplierWord';
  source:  'multiplyequals' | 'multiply-equals' | '*=';
}

export default IAssignmentMultiplierWordSyntaxNode;