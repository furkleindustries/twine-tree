import {
  IStringSyntaxNode,
} from './IStringSyntaxNode';
import {
  StringSyntaxNodeSubtypes,
} from './StringSyntaxNodeSubtypes';
import {
  isAbstractSyntaxNode,
} from '../isAbstractSyntaxNode';

export function isStringSyntaxNode(maybe: any): maybe is IStringSyntaxNode {
  return typeof maybe === 'object' &&
    maybe &&
    isAbstractSyntaxNode(maybe) &&
    Object.values(StringSyntaxNodeSubtypes).includes((<any>maybe).subtype) &&
    typeof (<any>maybe).value === 'string' &&
    (<any>maybe).value;
}

export default isStringSyntaxNode;