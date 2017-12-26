import {
  AssignmentWordSyntaxNodeSubtypes,
} from '../AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentWordSyntaxNode,
} from '../IAssignmentWordSyntaxNode';

export interface IAssignmentAdditionWordSyntaxNode extends IAssignmentWordSyntaxNode {
  readonly subtype: AssignmentWordSyntaxNodeSubtypes.AssignmentAdditionWord;
  readonly source:  'plusequals' | 'plus-equals' | '+=';
}

export default IAssignmentAdditionWordSyntaxNode;