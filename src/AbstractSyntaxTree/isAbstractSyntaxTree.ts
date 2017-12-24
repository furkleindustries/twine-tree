import {
  isAbstractSyntaxContent,
} from './isAbstractSyntaxContent';
import {
  isProgram,
} from './isProgram';
import {
  isStylesheet
} from './isStylesheet';
import {
  TAbstractSyntaxTree,
} from './TAbstractSyntaxTree';

export function isAbstractSyntaxTree(maybe: any): maybe is TAbstractSyntaxTree {
  return typeof maybe === 'object' &&
    maybe &&
    (isAbstractSyntaxContent(maybe) ||
      isProgram(maybe) ||
      isStylesheet(maybe));
}

export default isAbstractSyntaxTree;