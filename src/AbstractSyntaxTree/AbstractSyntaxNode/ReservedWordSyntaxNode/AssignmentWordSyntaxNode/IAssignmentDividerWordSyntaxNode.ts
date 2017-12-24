import {
  AssignmentWordSyntaxNodeSubtypes,
} from './AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentWordSyntaxNode,
} from './IAssignmentWordSyntaxNode';

export interface IAssignmentDividerWordSyntaxNode extends IAssignmentWordSyntaxNode {
  readonly subtype: AssignmentWordSyntaxNodeSubtypes.AssignmentDividerWord;
  readonly source:  'divideequals' | 'divide-equals' | '/=';
}

export default IAssignmentDividerWordSyntaxNode;