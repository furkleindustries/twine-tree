import {
  ComparatorWordSyntaxNodeSubtypes as subtypes,
} from '../ComparatorWordSyntaxNodeSubtypes';
import {
  INaiveNonEqualityWordSyntaxNode,
} from './INaiveNonEqualityWordSyntaxNode';
import {
  isComparatorWordSyntaxNode,
} from '../isComparatorWordSyntaxNode';

export function isNaiveNonEqualityWordSyntaxNode(maybe: any): maybe is INaiveNonEqualityWordSyntaxNode {
  return isComparatorWordSyntaxNode(maybe) &&
    maybe.subtype === subtypes.NaiveNonEqualityWord &&
    (maybe.source === 'neq' || maybe.source === '!=');
}

export default isNaiveNonEqualityWordSyntaxNode;