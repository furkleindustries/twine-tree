import {
  HtmlElementSyntaxNodeSubtypes,
} from '../HtmlElementSyntaxNodeSubtypes';
import {
  IHtmlPlainElementSyntaxNode,
} from './IHtmlPlainElementSyntaxNode';
import {
  isAbstractSyntaxContent,
} from '../../../../isAbstractSyntaxContent';
import {
  isHtmlElementSyntaxNode,
} from '../isHtmlElementSyntaxNode';

export function isHtmlPlainElementSyntaxNode(maybe: any): maybe is IHtmlPlainElementSyntaxNode {
  return isHtmlElementSyntaxNode(maybe) &&
    maybe.subtype === HtmlElementSyntaxNodeSubtypes.Plain &&
    typeof (<any>maybe).tagName === 'string' &&
    (<any>maybe).tagName &&
    Array.isArray((<any>maybe).children) &&
    (<any>maybe).children.filter((aa: any) => {
      return isAbstractSyntaxContent(aa);
    }).length === (<any>maybe).children.length;
}

export default isHtmlPlainElementSyntaxNode;