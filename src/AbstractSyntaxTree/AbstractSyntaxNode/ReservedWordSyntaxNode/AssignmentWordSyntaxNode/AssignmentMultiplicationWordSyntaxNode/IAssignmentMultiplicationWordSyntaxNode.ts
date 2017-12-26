import {
  AssignmentWordSyntaxNodeSubtypes,
} from '../AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentWordSyntaxNode,
} from '../IAssignmentWordSyntaxNode';

export interface IAssignmentMultiplicationWordSyntaxNode extends IAssignmentWordSyntaxNode {
  readonly subtype: AssignmentWordSyntaxNodeSubtypes.AssignmentMultiplicationWord;
  readonly source:
    'timesequals' |
    'times-equals' |
    'multiplyequals' |
    'multiply-equals' |
    '*=';
}

export default IAssignmentMultiplicationWordSyntaxNode;