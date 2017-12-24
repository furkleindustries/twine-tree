import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  IParentSyntaxNode,
} from '../IParentSyntaxNode';
import {
  LinkSyntaxNodeSubtypes
} from './LinkSyntaxNodeSubtypes';
import {
  TAbstractSyntaxContent,
} from '../../TAbstractSyntaxContent';

export interface ILinkSyntaxNode extends IParentSyntaxNode {
  readonly type:        AbstractSyntaxNodeTypes.Link;
  readonly subtype:     LinkSyntaxNodeSubtypes;
  readonly passageName: string;
  readonly children:    Array<TAbstractSyntaxContent>;
}

export default ILinkSyntaxNode;