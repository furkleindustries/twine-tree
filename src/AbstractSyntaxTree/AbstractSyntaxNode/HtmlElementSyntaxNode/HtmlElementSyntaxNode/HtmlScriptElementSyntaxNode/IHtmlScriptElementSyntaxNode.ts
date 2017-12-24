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
  Program,
} from 'esprima';

export interface IHtmlScriptElementSyntaxNode extends IHtmlElementSyntaxNode, ISourceAwareSyntaxNode {
  readonly type:     AbstractSyntaxNodeTypes.HtmlElement;
  readonly subtype:  HtmlElementSyntaxNodeSubtypes.Script;
  readonly tagName:  'script';
  readonly children: [ Program | string ];
}

export default IHtmlScriptElementSyntaxNode;