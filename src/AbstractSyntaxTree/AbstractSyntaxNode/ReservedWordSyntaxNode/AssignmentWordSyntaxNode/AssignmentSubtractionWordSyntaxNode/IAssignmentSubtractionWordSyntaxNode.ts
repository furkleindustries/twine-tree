import {
  AssignmentWordSyntaxNodeSubtypes,
} from '../AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentWordSyntaxNode,
} from '../IAssignmentWordSyntaxNode';

export interface IAssignmentSubtractionWordSyntaxNode extends IAssignmentWordSyntaxNode {
  readonly subtype: AssignmentWordSyntaxNodeSubtypes.AssignmentSubtractionWord;
  readonly source:  'minusequals' | 'minus-equals' | '-=';
}

export default IAssignmentSubtractionWordSyntaxNode;