import {
  IReservedWordSyntaxNode,
} from './IReservedWordSyntaxNode';

export interface ILastReferencedVariableWordSyntaxNode extends IReservedWordSyntaxNode {
  subtype: 'lastReferencedVariableWord';
  source:  'it';
}

export default ILastReferencedVariableWordSyntaxNode;