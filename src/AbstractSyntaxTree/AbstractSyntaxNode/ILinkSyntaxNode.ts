import {
  IAbstractSyntaxNode,
} from './IAbstractSyntaxNode';
import {
  IParentSyntaxNode,
} from './IParentSyntaxNode';

export interface ILinkSyntaxNode extends IAbstractSyntaxNode, IParentSyntaxNode {
  type: 'link';
  passageName: string;
  subtype:
    'onePart' |
    'twoPartRightArrow' |
    'twoPartLeftArrow' |
    'twoPartBar' |
    'linkElement';
}

export default ILinkSyntaxNode;