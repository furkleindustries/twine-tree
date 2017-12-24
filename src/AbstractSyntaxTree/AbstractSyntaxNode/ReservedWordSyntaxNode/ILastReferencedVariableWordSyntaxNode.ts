import {
  IReservedWordSyntaxNode,
} from './IReservedWordSyntaxNode';

export interface ILastReferencedVariableWordSyntaxNode extends IReservedWordSyntaxNode {
  readonly subtype: 'lastReferencedVariableWord';
  readonly source:  'it';
}

export default ILastReferencedVariableWordSyntaxNode;