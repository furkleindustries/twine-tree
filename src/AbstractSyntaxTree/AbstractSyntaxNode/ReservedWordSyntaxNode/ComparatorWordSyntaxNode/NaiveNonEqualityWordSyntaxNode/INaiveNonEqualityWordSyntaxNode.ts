import {
  ComparatorWordSyntaxNodeSubtypes,
} from '../ComparatorWordSyntaxNodeSubtypes';
import {
  IComparatorWordSyntaxNode,
} from '../IComparatorWordSyntaxNode';

export interface INaiveNonEqualityWordSyntaxNode extends IComparatorWordSyntaxNode {
  readonly subtype: ComparatorWordSyntaxNodeSubtypes.NaiveNonEqualityWord;
  readonly source:  'neq' | '!=';
}

export default INaiveNonEqualityWordSyntaxNode;