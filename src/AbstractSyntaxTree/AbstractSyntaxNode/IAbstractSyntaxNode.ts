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
  THtmlAttributeSyntaxNodeMap,
} from './HtmlSyntaxNode/THtmlAttributeSyntaxNodeMap';

export interface IAbstractSyntaxNode {
  readonly type:       AbstractSyntaxNodeTypes;
  readonly subtype?:   AbstractSyntaxNodeSubtypes;
  readonly attributes: THtmlAttributeSyntaxNodeMap;
  readonly location:   ILocation | null;
}

export default IAbstractSyntaxNode;