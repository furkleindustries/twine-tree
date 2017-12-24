import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  HtmlSyntaxNodeSubtypes,
} from './HtmlSyntaxNodeSubtypes';
import {
  IHtmlElementSyntaxNode,
} from './IHtmlElementSyntaxNode';
import {
  ISourceAwareSyntaxNode,
} from '../ISourceAwareSyntaxNode';
import {
  Stylesheet,
} from 'css';

export interface IHtmlStyleSyntaxNode extends IHtmlElementSyntaxNode, ISourceAwareSyntaxNode {
  readonly type:     AbstractSyntaxNodeTypes.HtmlElement;
  readonly subtype:  HtmlSyntaxNodeSubtypes.Style;
  readonly tagName:  'style';
  readonly children: [ Stylesheet | string ];
}

export default IHtmlStyleSyntaxNode;