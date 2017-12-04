import {
  Stylesheet,
} from 'css';
import {
  Program,
} from 'esprima';
import {
  IAbstractSyntaxNode,
} from './AbstractSyntaxNode/IAbstractSyntaxNode';

export type TAbstractSyntaxContent =
  string |
  IAbstractSyntaxNode |
  Program |
  Stylesheet;

export default TAbstractSyntaxContent;