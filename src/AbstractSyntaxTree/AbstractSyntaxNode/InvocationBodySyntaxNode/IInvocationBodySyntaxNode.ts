import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  InvocationBodySyntaxNodeSubtypes,
} from './InvocationBodySyntaxNodeSubtypes';
import {
  IParentSyntaxNode,
} from '../IParentSyntaxNode';
import {
  ISourceAwareSyntaxNode,
} from '../ISourceAwareSyntaxNode';
import {
  TAbstractSyntaxContent,
} from '../../TAbstractSyntaxContent';

export interface IInvocationBodySyntaxNode extends IParentSyntaxNode, ISourceAwareSyntaxNode {
  readonly type:     AbstractSyntaxNodeTypes.InvocationBody;
  readonly subtype:  InvocationBodySyntaxNodeSubtypes;
  readonly children: Array<TAbstractSyntaxContent>;
}

export default IInvocationBodySyntaxNode;