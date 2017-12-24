import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  HtmlSyntaxNodeSubtypes,
} from './HtmlSyntaxNodeSubtypes';
import {
  IParentSyntaxNode,
} from '../IParentSyntaxNode';
import {
  TAbstractSyntaxContent,
} from '../../TAbstractSyntaxContent';
import {
  Program,
} from 'esprima';
import {
  Stylesheet,
} from 'css';

export interface IHtmlElementSyntaxNode extends IParentSyntaxNode {
  readonly type:     AbstractSyntaxNodeTypes.HtmlElement;
  readonly subtype:  HtmlSyntaxNodeSubtypes;
  readonly tagName:  string;
  readonly children: Array<TAbstractSyntaxContent> |
                     [ string | Program | Stylesheet ];
}

export default IHtmlElementSyntaxNode;