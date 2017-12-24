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
  TAbstractSyntaxContent,
} from '../../TAbstractSyntaxContent';

export interface IPlainHtmlElementSyntaxNode extends IHtmlElementSyntaxNode {
  readonly type:     AbstractSyntaxNodeTypes.HtmlElement;
  readonly subtype:  HtmlSyntaxNodeSubtypes.Plain;
  readonly tagName:  string;
  readonly children: Array<TAbstractSyntaxContent>;
}

export default IPlainHtmlElementSyntaxNode;