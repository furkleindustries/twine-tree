import {
  IReservedWordSyntaxNode,
} from './IReservedWordSyntaxNode';

export interface IDivisionWordSyntaxNode extends IReservedWordSyntaxNode {
  subtype: 'divisionWord';
  source:  'dividedby' | 'divided-by' | '/';
}

export default IDivisionWordSyntaxNode;