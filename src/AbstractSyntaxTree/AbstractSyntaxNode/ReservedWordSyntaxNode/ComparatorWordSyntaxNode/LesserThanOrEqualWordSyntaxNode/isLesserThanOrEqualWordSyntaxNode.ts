import {
  ComparatorWordSyntaxNodeSubtypes as subtypes,
} from '../ComparatorWordSyntaxNodeSubtypes';
import {
  ILesserThanOrEqualWordSyntaxNode,
} from './ILesserThanOrEqualWordSyntaxNode';
import {
  isComparatorWordSyntaxNode,
} from '../isComparatorWordSyntaxNode';

export function isLesserThanOrEqualWordSyntaxNode(maybe: any): maybe is ILesserThanOrEqualWordSyntaxNode {
  return isComparatorWordSyntaxNode(maybe) &&
    maybe.subtype === subtypes.LesserThanOrEqualWord &&
    (maybe.source === 'lte' || maybe.source === '<=');
}

export default isLesserThanOrEqualWordSyntaxNode;