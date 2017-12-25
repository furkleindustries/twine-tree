import {
  ComparatorWordSyntaxNodeSubtypes as subtypes,
} from '../ComparatorWordSyntaxNodeSubtypes';
import {
  INaiveEqualityWordSyntaxNode,
} from './INaiveEqualityWordSyntaxNode';
import {
  isComparatorWordSyntaxNode,
} from '../isComparatorWordSyntaxNode';

export function isNaiveEqualityWordSyntaxNode(maybe: any): maybe is INaiveEqualityWordSyntaxNode {
  return isComparatorWordSyntaxNode(maybe) &&
    maybe.subtype === subtypes.NaiveEqualityWord &&
    (maybe.source === 'eq' || maybe.source === '==');
}

export default isNaiveEqualityWordSyntaxNode;