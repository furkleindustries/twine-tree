import {
  ArithmeticAndConcatenationWordSyntaxNodeSubtypes,
} from './ArithmeticAndConcatenationWordSyntaxNodeSubtypes';
import {
  IArithmeticAndConcatenationWordSyntaxNode,
} from './IArithmeticAndConcatenationWordSyntaxNode';

export interface IModuloWordSyntaxNode extends IArithmeticAndConcatenationWordSyntaxNode {
  readonly subtype: ArithmeticAndConcatenationWordSyntaxNodeSubtypes.ModuloWord;
  readonly source:  'modulo' | 'mod' | '%';
}

export default IModuloWordSyntaxNode;