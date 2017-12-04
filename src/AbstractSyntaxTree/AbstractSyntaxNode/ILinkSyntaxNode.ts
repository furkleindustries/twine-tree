import {
  IAbstractSyntaxNode,
} from './IAbstractSyntaxNode';
import {
  IParentSyntaxNode,
} from './IParentSyntaxNode';

export interface ILinkSyntaxNode extends IAbstractSyntaxNode, IParentSyntaxNode {
  passageName: string;
}

export default ILinkSyntaxNode;