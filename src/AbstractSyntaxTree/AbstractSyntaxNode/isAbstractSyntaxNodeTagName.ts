import {
  AbstractSyntaxNodeTypeToTagNameMap,
} from './AbstractSyntaxNodeTypeToTagNameMap';

export function isAbstractSyntaxNodeTagName(tagName: string): boolean {
  return Object.values(AbstractSyntaxNodeTypeToTagNameMap).includes(tagName);
}

export default AbstractSyntaxNodeTypeToTagNameMap;