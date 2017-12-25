import {
  ComparatorWordSyntaxNodeSubtypes,
} from '../ComparatorWordSyntaxNodeSubtypes';
import {
  IComparatorWordSyntaxNode,
} from '../IComparatorWordSyntaxNode';

export interface IGreaterThanOrEqualWordSyntaxNode extends IComparatorWordSyntaxNode {
  readonly subtype: ComparatorWordSyntaxNodeSubtypes.GreaterThanOrEqualWord;
  readonly source:  'gte' | '>=';
}

export default IGreaterThanOrEqualWordSyntaxNode;