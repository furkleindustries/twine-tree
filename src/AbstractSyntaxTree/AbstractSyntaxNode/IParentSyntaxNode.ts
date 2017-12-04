import {
  IAbstractSyntaxNode,
} from './IAbstractSyntaxNode';
import {
  TAbstractSyntaxContent,
} from '../TAbstractSyntaxContent';

export interface IParentSyntaxNode extends IAbstractSyntaxNode {
  children: Array<TAbstractSyntaxContent>;
}

export default IParentSyntaxNode;