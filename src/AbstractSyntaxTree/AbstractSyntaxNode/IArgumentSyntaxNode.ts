import {
  IAbstractSyntaxNode,
} from './IAbstractSyntaxNode';
import {
  TAbstractSyntaxContent,
} from '../TAbstractSyntaxContent';

export interface IArgumentSyntaxNode extends IAbstractSyntaxNode {
  type:     'argument';
  subtype?: 'argumentElement';
  value:    TAbstractSyntaxContent;
}

export default IArgumentSyntaxNode;