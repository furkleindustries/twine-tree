import {
  AbstractSyntaxNodeSubtypes,
} from './AbstractSyntaxNodeSubtypes';
import {
  AbstractSyntaxNodeTypes,
} from './AbstractSyntaxNodeTypes';
import {
  ILocation,
} from '../ILocation';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from './HtmlElementSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export interface IAbstractSyntaxNode {
  readonly type:       AbstractSyntaxNodeTypes;
  readonly subtype?:   AbstractSyntaxNodeSubtypes;
  readonly attributes: THtmlElementAttributeSyntaxNodeMap;
  readonly location:   ILocation | null;
}

export default IAbstractSyntaxNode;