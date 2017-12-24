import {
  ComparatorWordSyntaxNodeSubtypes,
} from './ComparatorWordSyntaxNodeSubtypes';
import {
  IComparatorWordSyntaxNode,
} from './IComparatorWordSyntaxNode';

export interface ILesserThanWordSyntaxNode extends IComparatorWordSyntaxNode {
  readonly subtype: ComparatorWordSyntaxNodeSubtypes.LesserThanWord;
  readonly source:  'lt' | '<';
}

export default ILesserThanWordSyntaxNode;