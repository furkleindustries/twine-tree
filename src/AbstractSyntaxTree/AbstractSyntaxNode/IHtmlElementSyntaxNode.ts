import {
  IAbstractSyntaxNode,
} from './IAbstractSyntaxNode';
import {
  IHtmlAttributeSyntaxNode,
} from './IHtmlAttributeSyntaxNode';
import {
  IParentSyntaxNode,
} from "./IParentSyntaxNode";
import {
  ISourceAwareSyntaxNode,
} from './ISourceAwareSyntaxNode';

export interface IHtmlElementSyntaxNode extends IAbstractSyntaxNode, IParentSyntaxNode, ISourceAwareSyntaxNode {
  type:       'htmlElement';
  subtype?:   'script' | 'style';
  tagName:    string;
  attributes: Array<IHtmlAttributeSyntaxNode>;
  children:   Array<string | IHtmlElementSyntaxNode>;
}

export default IHtmlElementSyntaxNode;