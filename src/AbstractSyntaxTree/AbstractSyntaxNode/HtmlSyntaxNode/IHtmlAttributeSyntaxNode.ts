import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  IAbstractSyntaxNode,
} from '../IAbstractSyntaxNode';

export interface IHtmlAttributeSyntaxNode extends IAbstractSyntaxNode {
  readonly type: AbstractSyntaxNodeTypes.HtmlElementAttribute;
  readonly key:  string;
  value:         string;
}

export default IHtmlAttributeSyntaxNode;