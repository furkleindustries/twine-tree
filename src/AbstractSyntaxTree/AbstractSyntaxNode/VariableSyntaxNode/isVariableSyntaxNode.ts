import {
  isAbstractSyntaxNode,
} from '../isAbstractSyntaxNode';
import {
  IVariableSyntaxNode,
} from './IVariableSyntaxNode';
import {
  VariableSyntaxNodeSubtypes,
} from './VariableSyntaxNodeSubtypes';

export function isVariableSyntaxNode(maybe: any): maybe is IVariableSyntaxNode {
  return isAbstractSyntaxNode(maybe) &&
    typeof (<any>maybe).name === 'string' &&
    (<any>maybe).name &&
    Object.values(VariableSyntaxNodeSubtypes).includes((<any>maybe).subtype);
}

export default isVariableSyntaxNode;