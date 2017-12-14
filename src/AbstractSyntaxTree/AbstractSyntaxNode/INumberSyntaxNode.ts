import {
  IAbstractSyntaxNode,
} from './IAbstractSyntaxNode';

export interface INumberSyntaxNode extends IAbstractSyntaxNode {
  type: 'number';
  value: number;
  subtype?: 'numberElement';
}

export default INumberSyntaxNode;