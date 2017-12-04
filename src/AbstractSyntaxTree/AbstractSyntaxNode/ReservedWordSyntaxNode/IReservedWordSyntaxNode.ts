import {
  ISourceAwareSyntaxNode,
} from '../ISourceAwareSyntaxNode';

export interface IReservedWordSyntaxNode extends ISourceAwareSyntaxNode {
  type: 'reservedWord';
  subtype:
    'additionAndConcatenationWord' |
    'subtractionWord' |
    'multiplicationWord' |
    'divisionWord' |
    'moduloWord' |
    'assignmentWord' |
    'assignmentAdderWord' |
    'assignmentSubtractorWord' |
    'assignmentMultiplierWord' |
    'assignmentDividerWord' |
    'assignmentModuloWord' |
    'lastReferencedVariableWord' |
    'naiveEqualityWord' |
    'naiveNonEqualityWord' |
    'exactEqualityWord' |
    'exactNonEqualityWord';
}

export default IReservedWordSyntaxNode;