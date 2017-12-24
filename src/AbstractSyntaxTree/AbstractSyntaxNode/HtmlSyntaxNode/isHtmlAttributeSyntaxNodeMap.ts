import {
  IHtmlAttributeSyntaxNode,
} from './IHtmlAttributeSyntaxNode';
import {
  isHtmlAttributeSyntaxNode,
} from './isHtmlAttributeSyntaxNode';

export function isHtmlAttributeSyntaxNodeMap(maybe: any): maybe is IHtmlAttributeSyntaxNode {
  const keys   = maybe ? Object.keys(maybe)   : [];
  const values = maybe ? Object.values(maybe) : [];
  return typeof maybe === 'object' &&
    maybe &&
    keys.filter((aa) => {
      return typeof aa === 'string' && aa;
    }).length === keys.length &&
    values.filter((aa) => {
      return isHtmlAttributeSyntaxNode(aa);
    }).length === values.length;
}

export default isHtmlAttributeSyntaxNodeMap;