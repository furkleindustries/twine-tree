import {
  AbstractSyntaxNodeTypes,
} from './AbstractSyntaxNodeTypes';
import {
  IAbstractSyntaxNode,
} from './IAbstractSyntaxNode';
import {
  isHtmlAttributeSyntaxNodeMap,
} from './HtmlSyntaxNode/HtmlElementAttributeSyntaxNode/isHtmlAttributeSyntaxNodeMap';
import {
  isSourceLocation,
} from '../SourceLocation/isSourceLocation';

export function isAbstractSyntaxNode(maybe: any): maybe is IAbstractSyntaxNode {
  return typeof maybe === 'object' &&
    maybe &&
    Object.values(AbstractSyntaxNodeTypes).includes(maybe.type) &&
    isHtmlAttributeSyntaxNodeMap(maybe.attributes) &&
    (maybe.location === null || isSourceLocation(maybe.location));
}

export default isAbstractSyntaxNode;