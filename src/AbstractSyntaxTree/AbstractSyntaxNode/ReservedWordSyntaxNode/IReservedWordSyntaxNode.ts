import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  ISourceAwareSyntaxNode,
} from '../ISourceAwareSyntaxNode';
import {
  ReservedWordSyntaxNodeSubtypes,
} from './ReservedWordSyntaxNodeSubtypes';

export interface IReservedWordSyntaxNode extends ISourceAwareSyntaxNode {
  readonly type:    AbstractSyntaxNodeTypes.ReservedWord;
  readonly subtype: ReservedWordSyntaxNodeSubtypes;
}

export default IReservedWordSyntaxNode;