import {
  AbstractSyntaxNodeTypes,
} from '../../AbstractSyntaxNodeTypes';
import {
  HtmlElementSyntaxNodeSubtypes,
} from './HtmlElementSyntaxNodeSubtypes';
import {
  IHtmlElementSyntaxNode,
} from './IHtmlElementSyntaxNode';
import {
  isAbstractSyntaxContent,
} from '../../../isAbstractSyntaxContent';
import {
  isAbstractSyntaxNode,
} from '../../isAbstractSyntaxNode';
import {
  isProgram,
} from '../../../isProgram';
import {
  isStylesheet,
} from '../../../isStylesheet';

export function isHtmlElementSyntaxNode(maybe: any): maybe is IHtmlElementSyntaxNode {
  return isAbstractSyntaxNode(maybe) &&
    maybe.type === AbstractSyntaxNodeTypes.HtmlElement &&
    maybe.subtype === HtmlElementSyntaxNodeSubtypes.Plain &&
    typeof (<any>maybe).tagName === 'string' &&
    (<any>maybe).tagName &&
    Array.isArray((<any>maybe).children) &&
    ((<any>maybe).children.filter((aa: any) => {
      return isAbstractSyntaxContent(aa);
    }).length === (<any>maybe).children.length ||
    (<any>maybe).children.filter((aa: any) => {
      return isProgram(aa);
    }).length === (<any>maybe).children.length ||
    (<any>maybe).children.filter((aa: any) => {
      return isStylesheet(aa);
    }).length === (<any>maybe).children.length);
}

export default isHtmlElementSyntaxNode;