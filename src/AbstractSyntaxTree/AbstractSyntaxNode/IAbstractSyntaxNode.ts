import {
  AbstractSyntaxNodeSubtypes,
} from './AbstractSyntaxNodeSubtypes';
import {
  AbstractSyntaxNodeTypes,
} from './AbstractSyntaxNodeTypes';
import {
  ISourceLocation,
} from '../SourceLocation/ISourceLocation';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from './HtmlSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export interface IAbstractSyntaxNode {
  readonly type:       AbstractSyntaxNodeTypes;
  readonly subtype:    AbstractSyntaxNodeSubtypes;
  readonly attributes: THtmlElementAttributeSyntaxNodeMap;
  readonly location:   ISourceLocation | null;
}

export default IAbstractSyntaxNode;