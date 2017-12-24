import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  HtmlSyntaxNodeSubtypes,
} from './HtmlSyntaxNodeSubtypes';
import {
  IHtmlStyleSyntaxNode,
} from './IHtmlStyleSyntaxNode';
import {
  isAbstractSyntaxNode,
} from '../isAbstractSyntaxNode';
import {
  isStylesheet,
} from '../../isStylesheet';

export function isHtmlStyleSyntaxNode(maybe: any): maybe is IHtmlStyleSyntaxNode {
  return isAbstractSyntaxNode(maybe) &&
    maybe.type === AbstractSyntaxNodeTypes.HtmlElement &&
    maybe.subtype === HtmlSyntaxNodeSubtypes.Style &&
    (<any>maybe).tagName === 'style' &&
    Array.isArray((<any>maybe).children) &&
    (<any>maybe).children.length === 1 &&
    (<any>maybe).children[0] &&
    (typeof (<any>maybe).children[0] === 'string' ||
      isStylesheet((<any>maybe).children[0])) &&
    typeof (<any>maybe).source === 'string';
}

export default isHtmlStyleSyntaxNode;