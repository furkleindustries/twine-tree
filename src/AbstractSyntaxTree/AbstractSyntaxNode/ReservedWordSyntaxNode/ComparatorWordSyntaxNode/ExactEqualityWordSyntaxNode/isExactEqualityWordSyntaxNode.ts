import {
  ComparatorWordSyntaxNodeSubtypes as subtypes,
} from '../ComparatorWordSyntaxNodeSubtypes';
import {
  IExactEqualityWordSyntaxNode,
} from './IExactEqualityWordSyntaxNode';
import {
  isComparatorWordSyntaxNode,
} from '../isComparatorWordSyntaxNode';

export function isExactEqualityWordSyntaxNode(maybe: any): maybe is IExactEqualityWordSyntaxNode {
  return isComparatorWordSyntaxNode(maybe) &&
    maybe.subtype === subtypes.ExactEqualityWord &&
    (maybe.source === 'is' || maybe.source === '===');
}

export default isExactEqualityWordSyntaxNode;