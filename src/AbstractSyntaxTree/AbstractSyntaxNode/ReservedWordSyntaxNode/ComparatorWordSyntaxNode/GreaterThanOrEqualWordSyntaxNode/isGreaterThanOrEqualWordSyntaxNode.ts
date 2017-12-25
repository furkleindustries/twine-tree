import {
  ComparatorWordSyntaxNodeSubtypes as subtypes,
} from '../ComparatorWordSyntaxNodeSubtypes';
import {
  IGreaterThanOrEqualWordSyntaxNode,
} from './IGreaterThanOrEqualWordSyntaxNode';
import {
  isComparatorWordSyntaxNode,
} from '../isComparatorWordSyntaxNode';

export function isGreaterThanOrEqualWordSyntaxNode(maybe: any): maybe is IGreaterThanOrEqualWordSyntaxNode {
  return isComparatorWordSyntaxNode(maybe) &&
    maybe.subtype === subtypes.GreaterThanOrEqualWord &&
    (maybe.source === 'gte' || maybe.source === '>=');
}

export default isGreaterThanOrEqualWordSyntaxNode;