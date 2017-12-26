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
  ISourceAwareSyntaxNode,
} from '../../../ISourceAwareSyntaxNode';
import {
  Stylesheet,
} from 'css';

export interface IHtmlStyleElementSyntaxNode extends IHtmlElementSyntaxNode, ISourceAwareSyntaxNode {
  readonly type:     AbstractSyntaxNodeTypes.HtmlElement;
  readonly subtype:  HtmlElementSyntaxNodeSubtypes.Style;
  readonly tagName:  'style';
  readonly children: [ Stylesheet | string ];
}

export default IHtmlStyleElementSyntaxNode;