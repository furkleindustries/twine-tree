import {
  AssignmentWordSyntaxNodeSubtypes,
} from './AssignmentWordSyntaxNodeSubtypes';
import {
  IReservedWordSyntaxNode,
} from '../IReservedWordSyntaxNode';

export interface IAssignmentWordSyntaxNode extends IReservedWordSyntaxNode {
  readonly subtype: AssignmentWordSyntaxNodeSubtypes;
}

export default IAssignmentWordSyntaxNode;