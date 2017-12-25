import {
  ILastReferencedVariableWordSyntaxNode,
} from './ILastReferencedVariableWordSyntaxNode';
import {
  isReservedWordSyntaxNode,
} from '../isReservedWordSyntaxNode';
import {
  LastReferencedVariableWordSyntaxNodeSubtypes as subtypes,
} from './LastReferencedVariableWordSyntaxNodeSubtypes';

export function isLastReferencedVariableWordSyntaxNode(maybe: any): maybe is ILastReferencedVariableWordSyntaxNode {
  return isReservedWordSyntaxNode(maybe) &&
    Object.values(subtypes).includes(maybe.subtype) &&
    maybe.source === 'it';
}

export default isLastReferencedVariableWordSyntaxNode;