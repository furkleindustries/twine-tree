import {
  IAbstractSyntaxNode,
} from './IAbstractSyntaxNode';

export interface IHtmlAttributeSyntaxNode extends IAbstractSyntaxNode {
  type:  'htmlElementAttribute';
  key:   string;
  value: string;
}

export default IHtmlAttributeSyntaxNode;