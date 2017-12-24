import {
  ComparatorWordSyntaxNodeSubtypes,
} from './ComparatorWordSyntaxNodeSubtypes';
import {
  IComparatorWordSyntaxNode,
} from './IComparatorWordSyntaxNode';

export interface IExactNonEqualityWordSyntaxNode extends IComparatorWordSyntaxNode {
  readonly subtype: ComparatorWordSyntaxNodeSubtypes.ExactNonEqualityWord;
  readonly source:  'isnot' | 'is-not' | '!==';
}

export default IExactNonEqualityWordSyntaxNode;