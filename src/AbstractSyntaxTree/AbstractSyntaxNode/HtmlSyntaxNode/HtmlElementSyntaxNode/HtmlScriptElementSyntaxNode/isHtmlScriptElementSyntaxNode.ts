import {
  HtmlElementSyntaxNodeSubtypes,
} from '../HtmlElementSyntaxNodeSubtypes';
import {
  IHtmlScriptElementSyntaxNode,
} from './IHtmlScriptElementSyntaxNode';
import {
  isHtmlElementSyntaxNode,
} from '../isHtmlElementSyntaxNode';
import {
  isProgram,
} from '../../../../isProgram';

export function isHtmlScriptSyntaxNode(maybe: any): maybe is IHtmlScriptElementSyntaxNode {
  return isHtmlElementSyntaxNode(maybe) &&
    maybe.subtype === HtmlElementSyntaxNodeSubtypes.Script &&
    (<any>maybe).tagName === 'script' &&
    Array.isArray((<any>maybe).children) &&
    (<any>maybe).children.length === 1 &&
    (<any>maybe).children[0] &&
    (typeof (<any>maybe).children[0] === 'string' ||
      isProgram((<any>maybe).children[0])) &&
    typeof (<any>maybe).source === 'string';
}

export default isHtmlScriptSyntaxNode;