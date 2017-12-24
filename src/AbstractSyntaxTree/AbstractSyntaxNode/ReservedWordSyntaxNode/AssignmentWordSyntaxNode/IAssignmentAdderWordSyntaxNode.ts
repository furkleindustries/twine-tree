import {
  AssignmentWordSyntaxNodeSubtypes,
} from './AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentWordSyntaxNode,
} from './IAssignmentWordSyntaxNode';

export interface IAssignmentAdderWordSyntaxNode extends IAssignmentWordSyntaxNode {
  readonly subtype: AssignmentWordSyntaxNodeSubtypes.AssignmentAdderWord;
  readonly source:  'plusequals' | 'plus-equals' | '+=';
}

export default IAssignmentAdderWordSyntaxNode;