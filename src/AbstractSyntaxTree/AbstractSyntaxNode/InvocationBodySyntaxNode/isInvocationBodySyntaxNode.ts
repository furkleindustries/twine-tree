import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  IInvocationBodySyntaxNode,
} from './IInvocationBodySyntaxNode';
import {
  isAbstractSyntaxContent,
} from '../../isAbstractSyntaxContent';
import {
  isAbstractSyntaxNode,
} from '../isAbstractSyntaxNode';
import {
  InvocationBodySyntaxNodeSubtypes,
} from './InvocationBodySyntaxNodeSubtypes';

export function isInvocationBodySyntaxNode(maybe: any): maybe is IInvocationBodySyntaxNode {
  const subtypes = Object.values(InvocationBodySyntaxNodeSubtypes);
  return isAbstractSyntaxNode(maybe) &&
    maybe.type === AbstractSyntaxNodeTypes.InvocationBody &&
    subtypes.includes((<any>maybe).subtype) &&
    Array.isArray((<any>maybe).children) &&
    (<any>maybe).children.filter((aa: any) => {
      return isAbstractSyntaxContent(aa);
    }).length === (<any>maybe).children.length;
}

export default isInvocationBodySyntaxNode;