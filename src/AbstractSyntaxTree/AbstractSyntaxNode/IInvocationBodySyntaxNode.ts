import {
  IAbstractSyntaxNode,
} from './IAbstractSyntaxNode';
import {
  IParentSyntaxNode,
} from './IParentSyntaxNode';

export interface IInvocationBodySyntaxNode extends IAbstractSyntaxNode, IParentSyntaxNode {
  type:    'invocationBody';
  subtype: 'hook' | 'inner';
}

export default IInvocationBodySyntaxNode;