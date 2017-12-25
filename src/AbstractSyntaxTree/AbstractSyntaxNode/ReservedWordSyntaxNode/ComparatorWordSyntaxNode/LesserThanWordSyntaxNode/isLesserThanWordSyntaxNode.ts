import {
  ComparatorWordSyntaxNodeSubtypes as subtypes,
} from '../ComparatorWordSyntaxNodeSubtypes';
import {
  ILesserThanWordSyntaxNode,
} from './ILesserThanWordSyntaxNode';
import {
  isComparatorWordSyntaxNode,
} from '../isComparatorWordSyntaxNode';

export function isLesserThanWordSyntaxNode(maybe: any): maybe is ILesserThanWordSyntaxNode {
  return isComparatorWordSyntaxNode(maybe) &&
    maybe.subtype === subtypes.LesserThanWord &&
    (maybe.source === 'lt' || maybe.source === '<');
}

export default isLesserThanWordSyntaxNode;