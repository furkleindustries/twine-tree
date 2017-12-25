import {
  ComparatorWordSyntaxNodeSubtypes,
} from '../ComparatorWordSyntaxNodeSubtypes';
import {
  IComparatorWordSyntaxNode,
} from '../IComparatorWordSyntaxNode';

export interface ILesserThanOrEqualWordSyntaxNode extends IComparatorWordSyntaxNode {
  readonly subtype: ComparatorWordSyntaxNodeSubtypes.LesserThanOrEqualWord;
  readonly source:  'lte' | '<=';
}

export default ILesserThanOrEqualWordSyntaxNode;