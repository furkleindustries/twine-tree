import {
  AbstractSyntaxNodeTypes,
} from '../../../AbstractSyntaxNodeTypes';
import {
  HtmlElementSyntaxNodeSubtypes,
} from '../HtmlElementSyntaxNodeSubtypes';
import {
  IHtmlElementSyntaxNode,
 } from '../IHtmlElementSyntaxNode';
import {
  TAbstractSyntaxContent,
} from '../../../../TAbstractSyntaxContent';

export interface IHtmlPlainElementSyntaxNode extends IHtmlElementSyntaxNode {
  readonly type:     AbstractSyntaxNodeTypes.HtmlElement;
  readonly subtype:  HtmlElementSyntaxNodeSubtypes.Plain;
  readonly tagName:  string;
  readonly children: Array<TAbstractSyntaxContent>;
}

export default IHtmlPlainElementSyntaxNode;