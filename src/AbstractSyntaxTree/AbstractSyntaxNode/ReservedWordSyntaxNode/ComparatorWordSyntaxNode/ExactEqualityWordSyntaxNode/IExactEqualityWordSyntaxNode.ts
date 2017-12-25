import {
  IComparatorWordSyntaxNode,
} from '../IComparatorWordSyntaxNode';
import {
  ComparatorWordSyntaxNodeSubtypes,
} from '../ComparatorWordSyntaxNodeSubtypes';

export interface IExactEqualityWordSyntaxNode extends IComparatorWordSyntaxNode {
  readonly subtype: ComparatorWordSyntaxNodeSubtypes.ExactEqualityWord;
  readonly source:  'is' | '===';
}

export default IExactEqualityWordSyntaxNode;