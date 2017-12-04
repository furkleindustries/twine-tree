import {
  IReservedWordSyntaxNode,
} from './IReservedWordSyntaxNode';

export interface IModuloWordSyntaxNode extends IReservedWordSyntaxNode {
  subtype: 'moduloWord';
  source:  'modulo' | '%';
}

export default IModuloWordSyntaxNode;