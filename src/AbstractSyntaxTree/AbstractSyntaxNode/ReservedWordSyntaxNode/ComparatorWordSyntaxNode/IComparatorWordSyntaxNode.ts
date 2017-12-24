import {
  ComparatorWordSyntaxNodeSubtypes,
} from './ComparatorWordSyntaxNodeSubtypes';
import {
  IReservedWordSyntaxNode,
} from '../IReservedWordSyntaxNode';

export interface IComparatorWordSyntaxNode extends IReservedWordSyntaxNode {
  readonly subtype: ComparatorWordSyntaxNodeSubtypes;
}

export default IComparatorWordSyntaxNode;