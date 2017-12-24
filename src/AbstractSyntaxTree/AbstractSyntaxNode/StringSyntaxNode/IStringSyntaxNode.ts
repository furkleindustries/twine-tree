import {
  IAbstractSyntaxNode,
} from '../IAbstractSyntaxNode';
import {
  StringSyntaxNodeSubtypes,
} from './StringSyntaxNodeSubtypes';

export interface IStringSyntaxNode extends IAbstractSyntaxNode {
  readonly subtype: StringSyntaxNodeSubtypes;
  readonly value:   string;
}

export default IStringSyntaxNode;