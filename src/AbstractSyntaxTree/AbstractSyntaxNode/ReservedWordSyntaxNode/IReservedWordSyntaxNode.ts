import {
  ISourceAwareSyntaxNode,
} from '../ISourceAwareSyntaxNode';

export interface IReservedWordSyntaxNode extends ISourceAwareSyntaxNode {
  type: 'reservedWord';
  subtype:
    'additionAndConcatenationWord' |
    'assignmentAdderWord' |
    'assignmentDividerWord' |
    'assignmentSubtractorWord' |
    'assignmentModuloWord' |
    'assignmentMultiplierWord' |
    'assignmentWord' |
    'divisionWord' |
    'exactEqualityWord' |
    'exactNonEqualityWord' |
    'moduloWord' |
    'multiplicationWord' |
    'subtractionWord' |
    'lastReferencedVariableWord' |
    'naiveEqualityWord' |
    'naiveNonEqualityWord';
}

export default IReservedWordSyntaxNode;