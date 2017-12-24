import {
  AbstractAbstractSyntaxNode,
} from '../AbstractAbstractSyntaxNode';
import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  InvocationBodySyntaxNodeSubtypes,
} from './InvocationBodySyntaxNodeSubtypes';
import {
  IInvocationBodySyntaxNode,
} from './IInvocationBodySyntaxNode';
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
  THtmlElementAttributeSyntaxNodeMap,
} from '../HtmlElementSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export const strings = {
  SUBTYPE_INVALID:
    'The subtype argument passed to the InvocationBodySyntaxNode ' +
    'constructor was not a member of the InvocationBodySyntaxNodeSubtypes ' +
    'enum.',

  CHILDREN_INVALID:
    'The children argument passed to the InvocationBodySyntaxNode ' +
    'constructor was not an array.',

  CHILD_INVALID:
    'A member of the children argument passed to the ' +
    'InvocationBodySyntaxNode constructor did not meet the ' +
    'isAbstractSyntaxContent type guard.',

  SOURCE_INVALID:
    'The source argument passed to the InvocationBodySyntaxNode constructor ' +
    'was not a string.',
};

export abstract class InvocationBodySyntaxNode extends AbstractAbstractSyntaxNode implements IInvocationBodySyntaxNode {
  readonly type:     AbstractSyntaxNodeTypes.InvocationBody = AbstractSyntaxNodeTypes.InvocationBody;
  readonly subtype:  InvocationBodySyntaxNodeSubtypes;
  readonly children: Array<TAbstractSyntaxContent>;
  readonly source:   string;

  constructor(
    subtype:         InvocationBodySyntaxNodeSubtypes,
    children:        Array<TAbstractSyntaxContent>,
    source:          string,
    attributes:      THtmlElementAttributeSyntaxNodeMap = {},
    location:        ILocation | null = null)
  {
    super(attributes, location);

    const subtypes = Object.values(InvocationBodySyntaxNodeSubtypes);
    if (!subtypes.includes(subtype)) {
      throw new Error(strings.SUBTYPE_INVALID);
    } else if (!Array.isArray(children)) {
      throw new Error(strings.CHILDREN_INVALID);
    } else if (children.filter((aa) => {
      return isAbstractSyntaxContent(aa);
    }).length !== children.length) {
      throw new Error(strings.CHILD_INVALID);
    } else if (arguments.length >= 4 && typeof source !== 'string') {
      throw new Error(strings.SOURCE_INVALID);
    }

    this.subtype  = subtype;
    this.children = children;
    this.source   = source;
  }
}

export default InvocationBodySyntaxNode;