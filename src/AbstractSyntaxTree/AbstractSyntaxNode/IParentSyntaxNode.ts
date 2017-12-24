import {
  IAbstractSyntaxNode,
} from './IAbstractSyntaxNode';
import {
  Program,
} from 'esprima';
import {
  Stylesheet,
} from 'css';
import {
  TAbstractSyntaxContent,
} from '../TAbstractSyntaxContent';

export interface IParentSyntaxNode extends IAbstractSyntaxNode {
  readonly children: Array<TAbstractSyntaxContent | Program | Stylesheet>;
}

export default IParentSyntaxNode;