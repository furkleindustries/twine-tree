import {
  IAbstractSyntaxNode,
} from './IAbstractSyntaxNode';
import {
  TAbstractSyntaxContent,
} from '../TAbstractSyntaxContent';

export interface ILinkSyntaxNode extends IAbstractSyntaxNode {
  passageName: string;
  children: Array<TAbstractSyntaxContent>;
}

export default ILinkSyntaxNode;