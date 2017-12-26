import {
  AbstractSyntaxNodeTypes,
} from '../../AbstractSyntaxNodeTypes';
import {
  IAbstractSyntaxNode,
} from '../../IAbstractSyntaxNode';

export interface IHtmlElementAttributeSyntaxNode extends IAbstractSyntaxNode {
  readonly type:  AbstractSyntaxNodeTypes.HtmlElementAttribute;
  readonly key:   string;
  readonly value: string;
}

export default IHtmlElementAttributeSyntaxNode;