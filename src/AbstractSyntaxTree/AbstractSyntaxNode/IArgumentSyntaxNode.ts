import {
  IAbstractSyntaxNode,
} from './IAbstractSyntaxNode';
import {
  TAbstractSyntaxContent,
} from '../TAbstractSyntaxContent';

export interface IArgumentSyntaxNode extends IAbstractSyntaxNode {
  type:  'argument';
  value: TAbstractSyntaxContent;
}

export default IArgumentSyntaxNode;