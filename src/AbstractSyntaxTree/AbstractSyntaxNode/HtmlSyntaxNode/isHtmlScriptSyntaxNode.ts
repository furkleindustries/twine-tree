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
  isAbstractSyntaxNode,
} from '../isAbstractSyntaxNode';
import {
  isProgram,
} from '../../isProgram';

export function isHtmlScriptSyntaxNode(maybe: any): maybe is IHtmlScriptSyntaxNode {
  return isAbstractSyntaxNode(maybe) &&
    maybe.type === AbstractSyntaxNodeTypes.HtmlElement &&
    maybe.subtype === HtmlSyntaxNodeSubtypes.Script &&
    (<any>maybe).tagName === 'script' &&
    Array.isArray((<any>maybe).children) &&
    (<any>maybe).children.length === 1 &&
    (<any>maybe).children[0] &&
    (typeof (<any>maybe).children[0] === 'string' ||
      isProgram((<any>maybe).children[0])) &&
    typeof (<any>maybe).source === 'string';
}

export default isHtmlScriptSyntaxNode;