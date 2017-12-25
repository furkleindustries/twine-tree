import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  IReservedWordSyntaxNode,
} from './IReservedWordSyntaxNode';
import {
  isReservedWordSyntaxNodeSubtype,
} from './isReservedWordSyntaxNodeSubtype';
import {
  isSourceAwareSyntaxNode,
} from '../isSourceAwareSyntaxNode';

export function isReservedWordSyntaxNode(maybe: any): maybe is IReservedWordSyntaxNode {
  return isSourceAwareSyntaxNode(maybe) &&
    maybe.type === AbstractSyntaxNodeTypes.ReservedWord &&
    isReservedWordSyntaxNodeSubtype(maybe.subtype);
}

export default isReservedWordSyntaxNode;