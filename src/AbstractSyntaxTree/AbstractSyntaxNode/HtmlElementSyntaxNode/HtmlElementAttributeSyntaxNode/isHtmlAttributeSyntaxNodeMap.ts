import {
  IHtmlElementAttributeSyntaxNode,
} from './IHtmlElementAttributeSyntaxNode';
import {
  isHtmlElementAttributeSyntaxNode,
} from './isHtmlElementAttributeSyntaxNode';

export function isHtmlAttributeSyntaxNodeMap(maybe: any): maybe is IHtmlElementAttributeSyntaxNode {
  const keys   = maybe ? Object.keys(maybe)   : [];
  const values = maybe ? Object.values(maybe) : [];
  return typeof maybe === 'object' &&
    maybe &&
    keys.filter((aa) => {
      return typeof aa === 'string' && aa;
    }).length === keys.length &&
    values.filter((aa) => {
      return isHtmlElementAttributeSyntaxNode(aa);
    }).length === values.length;
}

export default isHtmlAttributeSyntaxNodeMap;