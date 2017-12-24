import {
  AbstractAbstractSyntaxNode,
} from '../AbstractAbstractSyntaxNode';
import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  LinkSyntaxNodeSubtypes,
} from './LinkSyntaxNodeSubtypes';
import {
  ILinkSyntaxNode,
} from './ILinkSyntaxNode';
import {
  ILocation,
} from '../../ILocation';
import {
  isAbstractSyntaxContent,
} from '../../isAbstractSyntaxContent';
import {
  TAbstractSyntaxContent,
} from '../../TAbstractSyntaxContent';
import {
  THtmlAttributeSyntaxNodeMap,
} from '../HtmlSyntaxNode/THtmlAttributeSyntaxNodeMap';

export const strings = {
  NAME_INVALID:
    'The name argument passed to the LinkSyntaxNode constructor was not a ' +
    'string with content.',

  SUBTYPE_INVALID:
    'The subtype argument passed to the LinkSyntaxNode constructor was not ' +
    'a member of the LinkSyntaxNodeSubtypes enum.',

  CHILDREN_INVALID:
    'The children argument passed to the LinkSyntaxNode constructor ' +
    'was not an array.',

  CHILDREN_EMPTY:
    'The children argument passed to the LinkSyntaxNode constructor was an ' +
    'empty array. A link must have at least one child.',

  CHILD_INVALID:
    'One of the members of the children argument passed to the ' +
    'LinkSyntaxNode constructor did not meet the isAbstractSyntaxContent ' +
    'type guard.',
};

export abstract class LinkSyntaxNode extends AbstractAbstractSyntaxNode implements ILinkSyntaxNode {
  readonly type:        AbstractSyntaxNodeTypes.Link = AbstractSyntaxNodeTypes.Link;
  readonly subtype:     LinkSyntaxNodeSubtypes;
  readonly passageName: string;
  readonly children:    Array<TAbstractSyntaxContent>;

  constructor(
    passageName:        string,
    subtype:            LinkSyntaxNodeSubtypes,
    children:           Array<TAbstractSyntaxContent>,
    attributes:         THtmlAttributeSyntaxNodeMap = {},
    location:           ILocation | null = null)
  {
    super(attributes, location);

    const subtypes = Object.values(LinkSyntaxNodeSubtypes);
    if (typeof passageName !== 'string' || !passageName) {
      throw new Error(strings.NAME_INVALID);
    } else if (!subtypes.includes(subtype)) {
      throw new Error(strings.SUBTYPE_INVALID);
    } else if (!Array.isArray(children)) {
      throw new Error(strings.CHILDREN_INVALID);
    } else if (children.length === 0) {
      throw new Error(strings.CHILDREN_EMPTY);
    } else if (children.filter((aa) => {
      return isAbstractSyntaxContent(aa);
    }).length !== children.length)
    {
      throw new Error(strings.CHILD_INVALID);
    }

    this.subtype  = subtype;
    this.children = children;
  }
}

export default LinkSyntaxNode;