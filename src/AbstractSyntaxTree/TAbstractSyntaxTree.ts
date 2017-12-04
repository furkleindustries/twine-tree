import {
  Program,
} from 'esprima';
import {
  Stylesheet,
} from 'css';
import {
  TAbstractSyntaxContent,
} from './TAbstractSyntaxContent';

export type TAbstractSyntaxTree =
  Array<TAbstractSyntaxContent> |
  Program |
  Stylesheet;

export default TAbstractSyntaxTree;