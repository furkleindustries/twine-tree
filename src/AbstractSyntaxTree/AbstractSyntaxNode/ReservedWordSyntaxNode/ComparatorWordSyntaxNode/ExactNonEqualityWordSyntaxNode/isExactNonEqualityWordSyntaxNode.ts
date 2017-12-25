import {
  ComparatorWordSyntaxNodeSubtypes as subtypes,
} from '../ComparatorWordSyntaxNodeSubtypes';
import {
  IExactNonEqualityWordSyntaxNode,
} from './IExactNonEqualityWordSyntaxNode';
import {
  isComparatorWordSyntaxNode,
} from '../isComparatorWordSyntaxNode';

export function isExactNonEqualityWordSyntaxNode(maybe: any): maybe is IExactNonEqualityWordSyntaxNode {
  return isComparatorWordSyntaxNode(maybe) &&
    maybe.subtype === subtypes.ExactNonEqualityWord &&
    (maybe.source === 'isnot' ||
      maybe.source === 'is-not' ||
      maybe.source === '!==');
}

export default isExactNonEqualityWordSyntaxNode;