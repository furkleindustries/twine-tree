import {
  ComparatorWordSyntaxNodeSubtypes,
} from '../ComparatorWordSyntaxNodeSubtypes';
import {
  IComparatorWordSyntaxNode,
} from '../IComparatorWordSyntaxNode';

export interface IGreaterThanWordSyntaxNode extends IComparatorWordSyntaxNode {
  readonly subtype: ComparatorWordSyntaxNodeSubtypes.GreaterThanWord;
  readonly source:  'gt' | '>';
}

export default IGreaterThanWordSyntaxNode;