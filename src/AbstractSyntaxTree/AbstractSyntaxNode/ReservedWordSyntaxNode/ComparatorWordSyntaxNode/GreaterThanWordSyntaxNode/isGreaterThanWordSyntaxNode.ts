import {
  ComparatorWordSyntaxNodeSubtypes as subtypes,
} from '../ComparatorWordSyntaxNodeSubtypes';
import {
  IGreaterThanWordSyntaxNode,
} from './IGreaterThanWordSyntaxNode';
import {
  isComparatorWordSyntaxNode,
} from '../isComparatorWordSyntaxNode';

export function isGreaterThanWordSyntaxNode(maybe: any): maybe is IGreaterThanWordSyntaxNode {
  return isComparatorWordSyntaxNode(maybe) &&
    maybe.subtype === subtypes.GreaterThanWord &&
    (maybe.source === 'gt' || maybe.source === '>');
}

export default isGreaterThanWordSyntaxNode;