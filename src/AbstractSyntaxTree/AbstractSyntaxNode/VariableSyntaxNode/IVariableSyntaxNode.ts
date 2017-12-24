import {
  IAbstractSyntaxNode,
} from '../IAbstractSyntaxNode';
import {
  VariableSyntaxNodeSubtypes,
} from './VariableSyntaxNodeSubtypes';

export interface IVariableSyntaxNode extends IAbstractSyntaxNode {
  readonly name:    string;
  readonly subtype: VariableSyntaxNodeSubtypes;
}

export default IVariableSyntaxNode;