import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  IAbstractSyntaxNode,
} from '../IAbstractSyntaxNode';
import {
  NumberSyntaxNodeSubtypes,
} from './NumberSyntaxNodeSubtypes';

export interface INumberSyntaxNode extends IAbstractSyntaxNode {
  readonly type:    AbstractSyntaxNodeTypes.Number;
  readonly subtype: NumberSyntaxNodeSubtypes;
  readonly value:   number;
}

export default INumberSyntaxNode;