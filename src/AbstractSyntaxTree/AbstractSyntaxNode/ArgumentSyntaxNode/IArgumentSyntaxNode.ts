import {
  ArgumentSyntaxNodeSubtypes,
} from './ArgumentSyntaxNodeSubtypes';
import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  IAbstractSyntaxNode,
} from '../IAbstractSyntaxNode';
import {
  TAbstractSyntaxContent,
} from '../../TAbstractSyntaxContent';

export interface IArgumentSyntaxNode extends IAbstractSyntaxNode {
  readonly type:    AbstractSyntaxNodeTypes.Argument;
  readonly subtype: ArgumentSyntaxNodeSubtypes;
  readonly value:   TAbstractSyntaxContent;
}

export default IArgumentSyntaxNode;