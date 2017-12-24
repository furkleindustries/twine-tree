import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  IArgumentSyntaxNode,
} from './IArgumentSyntaxNode';
import {
  ArgumentSyntaxNodeSubtypes,
} from './ArgumentSyntaxNodeSubtypes';
import {
  isAbstractSyntaxContent,
} from '../../isAbstractSyntaxContent';
import {
  isAbstractSyntaxNode,
} from '../isAbstractSyntaxNode';

export function isArgumentSyntaxNode(maybe: any): maybe is IArgumentSyntaxNode {
  const subtypes = Object.values(ArgumentSyntaxNodeSubtypes);
  return isAbstractSyntaxNode(maybe) &&
    maybe.type === AbstractSyntaxNodeTypes.Argument &&
    subtypes.includes((<any>maybe).subtype) &&
    isAbstractSyntaxContent((<any>maybe).value);
}

export default isArgumentSyntaxNode;