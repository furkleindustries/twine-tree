import {
  ILocation,
} from '../ILocation';

export interface IAbstractSyntaxNode {
  type:
    'argument' |
    'htmlElement' |
    'htmlElementAttribute' |
    'invocation' |
    'invocationBody' |
    'link' |
    'number' |
    'string' |
    'variable' |
    'reservedWord';

  subtype?:
    'additionAndConcatenationWord' |
    'argumentElement' |
    'assignmentAdderWord' |
    'assignmentDividerWord' |
    'assignmentModuloWord' |
    'assignmentMultiplierWord' |
    'assignmentSubtractorWord' |
    'assignmentWord' |
    'bare' |
    'divisionWord' |
    'doubleQuote' |
    'exactEqualityWord' |
    'exactNonEqualityWord' |
    'grave' |
    'hook' |
    'inner' |
    'invocationBodyElement' |
    'lastReferencedVariableWord' |
    'linkElement' |
    'moduloWord' |
    'multiplicationWord' |
    'naiveEqualityWord' |
    'naiveNonEqualityWord' |
    'numberElement' |
    'onePart' |
    'script' |
    'singleQuote' |
    'stringElement' |
    'subtractionWord' |
    'style' |
    'twoPartRightArrow' |
    'twoPartLeftArrow' |
    'twoPartBar' |
    'withBody' |
    'withoutBody';

  attributes?: Object;
  location?:   ILocation;
}

export default IAbstractSyntaxNode;