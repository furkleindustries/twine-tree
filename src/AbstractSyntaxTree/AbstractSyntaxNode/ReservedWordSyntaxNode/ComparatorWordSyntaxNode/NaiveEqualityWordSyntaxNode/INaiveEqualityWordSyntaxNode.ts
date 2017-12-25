import {
  ComparatorWordSyntaxNodeSubtypes,
} from '../ComparatorWordSyntaxNodeSubtypes';
import {
  IComparatorWordSyntaxNode,
} from '../IComparatorWordSyntaxNode';

export interface INaiveEqualityWordSyntaxNode extends IComparatorWordSyntaxNode {
  readonly subtype: ComparatorWordSyntaxNodeSubtypes.NaiveEqualityWord;
  readonly source:  'eq' | '==';
}

export default INaiveEqualityWordSyntaxNode;