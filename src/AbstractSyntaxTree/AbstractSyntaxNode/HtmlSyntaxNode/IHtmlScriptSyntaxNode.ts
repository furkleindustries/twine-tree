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
  Program,
} from 'esprima';

export interface IHtmlScriptSyntaxNode extends IHtmlElementSyntaxNode, ISourceAwareSyntaxNode {
  readonly type:     AbstractSyntaxNodeTypes.HtmlElement;
  readonly subtype:  HtmlSyntaxNodeSubtypes.Script;
  readonly tagName:  'script';
  readonly children: [ Program | string ];
}

export default IHtmlScriptSyntaxNode;