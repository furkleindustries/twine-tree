import {
  AbstractSyntaxNodeTypes,
} from './AbstractSyntaxNodeTypes';
import {
  IAbstractSyntaxNode,
} from './IAbstractSyntaxNode';
import {
  isHtmlAttributeSyntaxNodeMap,
} from './HtmlElementSyntaxNode/HtmlElementAttributeSyntaxNode/isHtmlAttributeSyntaxNodeMap';
import {
  isLocation,
} from '../isLocation';

export function isAbstractSyntaxNode(maybe: any): maybe is IAbstractSyntaxNode {
  return typeof maybe === 'object' &&
    maybe &&
    Object.values(AbstractSyntaxNodeTypes).includes(maybe.type) &&
    isHtmlAttributeSyntaxNodeMap(maybe.attributes) &&
    (maybe.location === null || isLocation(maybe.location));
}

export default isAbstractSyntaxNode;