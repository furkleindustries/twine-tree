import {
  ComparatorWordSyntaxNodeSubtypes as subtypes,
} from './ComparatorWordSyntaxNodeSubtypes';
import {
  IComparatorWordSyntaxNode,
} from './IComparatorWordSyntaxNode';
import {
  isReservedWordSyntaxNode,
} from '../isReservedWordSyntaxNode';

export function isComparatorWordSyntaxNode(maybe: any): maybe is IComparatorWordSyntaxNode {
  return isReservedWordSyntaxNode(maybe) &&
    Object.values(subtypes).includes(maybe.subtype);
}

export default isComparatorWordSyntaxNode;