import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  IInvocationSyntaxNode,
} from './IInvocationSyntaxNode';
import {
  isArgumentSyntaxNode,
} from '../ArgumentSyntaxNode/isArgumentSyntaxNode';
import {
  InvocationSyntaxNodeSubtypes,
} from './InvocationSyntaxNodeSubtypes';
import {
  isInvocationBodySyntaxNode,
} from '../InvocationBodySyntaxNode/isInvocationBodySyntaxNode';
import { isAbstractSyntaxNode } from '../isAbstractSyntaxNode';

export function isInvocationSyntaxNode(maybe: any): maybe is IInvocationSyntaxNode {
  const subtypes = Object.values(InvocationSyntaxNodeSubtypes);
  return isAbstractSyntaxNode(maybe) &&
    maybe.type === AbstractSyntaxNodeTypes.Invocation &&
    subtypes.includes((<any>maybe).subtype) &&
    typeof (<any>maybe).name === 'string' &&
    (<any>maybe).name &&
    Array.isArray((<any>maybe).arguments) &&
    (<any>maybe).arguments.filter((aa: any) => {
      return isArgumentSyntaxNode(aa);
    }).length === (<any>maybe).arguments.length &&
    ((<any>maybe).body === null ||
      isInvocationBodySyntaxNode((<any>maybe).body));
}

export default isInvocationSyntaxNode;