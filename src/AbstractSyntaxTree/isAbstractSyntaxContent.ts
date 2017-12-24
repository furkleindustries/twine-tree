import {
  TAbstractSyntaxContent,
} from './TAbstractSyntaxContent';
import {
  isAbstractSyntaxNode,
} from './AbstractSyntaxNode/isAbstractSyntaxNode';

export function isAbstractSyntaxContent(maybe: any): maybe is TAbstractSyntaxContent {
  return maybe && (typeof maybe === 'string' || isAbstractSyntaxNode(maybe));
}

export default isAbstractSyntaxContent;