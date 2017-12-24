import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  InvocationSyntaxNodeSubtypes,
} from './InvocationSyntaxNodeSubtypes';
import {
  IAbstractSyntaxNode,
} from '../IAbstractSyntaxNode';
import {
  IArgumentSyntaxNode,
} from '../ArgumentSyntaxNode/IArgumentSyntaxNode';
import {
  IInvocationBodySyntaxNode,
} from '../InvocationBodySyntaxNode/IInvocationBodySyntaxNode';

export interface IInvocationSyntaxNode extends IAbstractSyntaxNode {
  readonly type:      AbstractSyntaxNodeTypes.Invocation;
  readonly subtype:   InvocationSyntaxNodeSubtypes;
  readonly name:      string;
  readonly arguments: Array<IArgumentSyntaxNode>;
  readonly body:      IInvocationBodySyntaxNode | null;
}

export default IInvocationSyntaxNode;