import {
  isAbstractSyntaxNode,
} from './isAbstractSyntaxNode';
import {
  ISourceAwareSyntaxNode,
} from './ISourceAwareSyntaxNode';

export function isSourceAwareSyntaxNode(maybe: any): maybe is ISourceAwareSyntaxNode {
  return isAbstractSyntaxNode(maybe) &&
    typeof (<any>maybe).source === 'string' &&
    (<any>maybe).source;
}

export default isAbstractSyntaxNode;