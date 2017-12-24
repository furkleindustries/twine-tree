import {
  HtmlElementSyntaxNodeSubtypes,
} from '../HtmlElementSyntaxNodeSubtypes';
import {
  IHtmlStyleElementSyntaxNode,
} from './IHtmlStyleElementSyntaxNode';
import {
  isHtmlElementSyntaxNode,
} from '../isHtmlElementSyntaxNode';
import {
  isStylesheet,
} from '../../../../isStylesheet';

export function isHtmlStyleElementSyntaxNode(maybe: any): maybe is IHtmlStyleElementSyntaxNode {
  return isHtmlElementSyntaxNode(maybe) &&
    maybe.subtype === HtmlElementSyntaxNodeSubtypes.Style &&
    (<any>maybe).tagName === 'style' &&
    Array.isArray((<any>maybe).children) &&
    (<any>maybe).children.length === 1 &&
    (<any>maybe).children[0] &&
    (typeof (<any>maybe).children[0] === 'string' ||
      isStylesheet((<any>maybe).children[0])) &&
    typeof (<any>maybe).source === 'string';
}

export default isHtmlStyleElementSyntaxNode;