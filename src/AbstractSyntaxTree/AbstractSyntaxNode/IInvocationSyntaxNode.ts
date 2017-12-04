import {
  IAbstractSyntaxNode,
} from './IAbstractSyntaxNode';
import {
  IParentSyntaxNode,
} from './IParentSyntaxNode';
import {
  TAbstractSyntaxContent,
} from '../TAbstractSyntaxContent';

export interface IInvocationSyntaxNode extends IAbstractSyntaxNode, IParentSyntaxNode {
  subtype:   'withBody' | 'withoutBody';
  name:      string;
  arguments: Array<TAbstractSyntaxContent>;
}

export default IInvocationSyntaxNode;