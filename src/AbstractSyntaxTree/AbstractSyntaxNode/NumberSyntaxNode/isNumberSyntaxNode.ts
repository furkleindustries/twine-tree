import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  INumberSyntaxNode,
} from './INumberSyntaxNode';
import {
  isAbstractSyntaxNode,
} from '../isAbstractSyntaxNode';
import {
  NumberSyntaxNodeSubtypes,
} from './NumberSyntaxNodeSubtypes';

export function isNumberSyntaxNode(maybe: any): maybe is INumberSyntaxNode {
  return isAbstractSyntaxNode(maybe) &&
    maybe.type === AbstractSyntaxNodeTypes.Number &&
    Object.values(NumberSyntaxNodeSubtypes).includes((<any>maybe).subtype) &&
    typeof (<any>maybe).value === 'number' &&
    !Number.isNaN((<any>maybe).value);
}

export default isNumberSyntaxNode;