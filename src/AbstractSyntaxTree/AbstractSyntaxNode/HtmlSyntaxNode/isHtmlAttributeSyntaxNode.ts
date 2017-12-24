import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  IHtmlAttributeSyntaxNode,
} from './IHtmlAttributeSyntaxNode';
import {
  isAbstractSyntaxNode,
} from '../isAbstractSyntaxNode';

export function isHtmlAttributeSyntaxNode(maybe: any): maybe is IHtmlAttributeSyntaxNode {
  return isAbstractSyntaxNode(maybe) &&
    maybe.type === AbstractSyntaxNodeTypes.HtmlElementAttribute &&
    typeof (<any>maybe).key === 'string' &&
    (<any>maybe).key &&
    typeof (<any>maybe).value === 'string';
}

export default isHtmlAttributeSyntaxNode;