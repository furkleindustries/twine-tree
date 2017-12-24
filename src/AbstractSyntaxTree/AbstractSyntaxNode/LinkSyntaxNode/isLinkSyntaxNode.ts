import {
  AbstractSyntaxNodeTypes,
 } from '../AbstractSyntaxNodeTypes';
import {
  ILinkSyntaxNode,
} from './ILinkSyntaxNode';
import {
  isAbstractSyntaxContent,
} from '../../isAbstractSyntaxContent';
import {
  isAbstractSyntaxNode,
} from '../isAbstractSyntaxNode';
import {
  LinkSyntaxNodeSubtypes,
} from './LinkSyntaxNodeSubtypes';

export function isLinkSyntaxNode(maybe: any): maybe is ILinkSyntaxNode {
  const subtypes = Object.values(LinkSyntaxNodeSubtypes);
  return isAbstractSyntaxNode(maybe) &&
    maybe.type === AbstractSyntaxNodeTypes.Link &&
    subtypes.includes((<any>maybe).subtype) &&
    typeof (<any>maybe).passageName === 'string' &&
    (<any>maybe).passageName &&
    Array.isArray((<any>maybe).children) &&
    (<any>maybe).children.filter((aa: any) => {
      return isAbstractSyntaxContent(aa);
    }).length === (<any>maybe).children.length;
}

export default isLinkSyntaxNode;