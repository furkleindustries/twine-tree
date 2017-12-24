import {
  AssignmentWordSyntaxNodeSubtypes,
} from './AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentWordSyntaxNode,
} from './IAssignmentWordSyntaxNode';

export interface IAssignmentMultiplierWordSyntaxNode extends IAssignmentWordSyntaxNode {
  readonly subtype: AssignmentWordSyntaxNodeSubtypes.AssignmentMultiplierWord;
  readonly source:  'multiplyequals' | 'multiply-equals' | '*=';
}

export default IAssignmentMultiplierWordSyntaxNode;