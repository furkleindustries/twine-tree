import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  HtmlSyntaxNodeSubtypes,
} from './HtmlSyntaxNodeSubtypes';
import {
  IHtmlScriptSyntaxNode,
} from './IHtmlScriptSyntaxNode';
import {
  isAbstractSyntaxContent,
} from '../../isAbstractSyntaxContent';
import {
  isAbstractSyntaxNode,
} from '../isAbstractSyntaxNode';

export function isHtmlElementSyntaxNode(maybe: any): maybe is IHtmlScriptSyntaxNode {
  return isAbstractSyntaxNode(maybe) &&
    maybe.type === AbstractSyntaxNodeTypes.HtmlElement &&
    maybe.subtype === HtmlSyntaxNodeSubtypes.Plain &&
    typeof (<any>maybe).tagName === 'string' &&
    (<any>maybe).tagName &&
    Array.isArray((<any>maybe).children) &&
    (<any>maybe).children.filter((aa: any) => {
      return isAbstractSyntaxContent(aa);
    }).length === (<any>maybe).children.length;
}

export default isHtmlElementSyntaxNode;