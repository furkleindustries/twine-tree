import {
  IParentSyntaxNode,
} from './IParentSyntaxNode';
import {
  isAbstractSyntaxContent,
} from '../isAbstractSyntaxContent';
import {
  isAbstractSyntaxNode,
} from './isAbstractSyntaxNode';
import {
  isProgram,
} from '../isProgram';
import {
  isStylesheet,
} from '../isStylesheet';

export function isParentSyntaxNode(maybe: any): maybe is IParentSyntaxNode {
  return isAbstractSyntaxNode(maybe) &&
    Array.isArray((<any>maybe).children) &&
    ((<any>maybe).children.filter((aa: any) => {
      return isAbstractSyntaxContent(aa);
    }).length === (<any>maybe).children.length ||
    (<any>maybe).children.filter((aa: any) => {
      return isProgram(aa);
    }).length === (<any>maybe).children.length ||
    (<any>maybe).children.filter((aa: any) => {
      return isStylesheet(aa);
    }).length === (<any>maybe).children.length);
}

export default isParentSyntaxNode;