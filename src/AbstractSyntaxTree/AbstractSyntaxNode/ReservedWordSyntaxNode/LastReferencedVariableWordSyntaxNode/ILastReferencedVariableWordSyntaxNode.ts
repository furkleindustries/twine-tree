import {
  IReservedWordSyntaxNode,
} from '../IReservedWordSyntaxNode';
import {
  LastReferencedVariableWordSyntaxNodeSubtypes,
} from './LastReferencedVariableWordSyntaxNodeSubtypes';

export interface ILastReferencedVariableWordSyntaxNode extends IReservedWordSyntaxNode {
  readonly subtype: LastReferencedVariableWordSyntaxNodeSubtypes;
  readonly source:  'it';
}

export default ILastReferencedVariableWordSyntaxNode;