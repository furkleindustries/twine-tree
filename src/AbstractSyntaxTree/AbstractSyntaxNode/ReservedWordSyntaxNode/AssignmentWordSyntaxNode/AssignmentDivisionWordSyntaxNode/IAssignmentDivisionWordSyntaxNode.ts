import {
  AssignmentWordSyntaxNodeSubtypes,
} from '../AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentWordSyntaxNode,
} from '../IAssignmentWordSyntaxNode';

export interface IAssignmentDivisionWordSyntaxNode extends IAssignmentWordSyntaxNode {
  readonly subtype: AssignmentWordSyntaxNodeSubtypes.AssignmentDivisionWord;
  readonly source:  'divideequals' | 'divide-equals' | '/=';
}

export default IAssignmentDivisionWordSyntaxNode;