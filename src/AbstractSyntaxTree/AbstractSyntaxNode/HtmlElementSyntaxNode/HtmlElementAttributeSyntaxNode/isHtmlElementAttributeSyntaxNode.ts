import {
  AbstractSyntaxNodeTypes,
} from '../../AbstractSyntaxNodeTypes';
import {
  IHtmlElementAttributeSyntaxNode,
} from './IHtmlElementAttributeSyntaxNode';
import {
  isAbstractSyntaxNode,
} from '../../isAbstractSyntaxNode';

export function isHtmlElementAttributeSyntaxNode(maybe: any): maybe is IHtmlElementAttributeSyntaxNode {
  return isAbstractSyntaxNode(maybe) &&
    maybe.type === AbstractSyntaxNodeTypes.HtmlElementAttribute &&
    typeof (<any>maybe).key === 'string' &&
    (<any>maybe).key &&
    typeof (<any>maybe).value === 'string';
}

export default isHtmlElementAttributeSyntaxNode;