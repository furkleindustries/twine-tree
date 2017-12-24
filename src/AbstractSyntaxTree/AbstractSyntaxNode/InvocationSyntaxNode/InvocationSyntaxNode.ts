import {
  AbstractAbstractSyntaxNode,
} from '../AbstractAbstractSyntaxNode';
import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  IInvocationBodySyntaxNode,
} from '../InvocationBodySyntaxNode/IInvocationBodySyntaxNode';
import {
  InvocationSyntaxNodeSubtypes,
} from './InvocationSyntaxNodeSubtypes';
import {
  IInvocationSyntaxNode,
} from './IInvocationSyntaxNode';
import {
  ILocation,
} from '../../ILocation';
import {
  isArgumentSyntaxNode,
} from '../ArgumentSyntaxNode/isArgumentSyntaxNode';
import {
  isInvocationBodySyntaxNode,
} from '../InvocationBodySyntaxNode/isInvocationBodySyntaxNode';
import {
  THtmlAttributeSyntaxNodeMap,
} from '../HtmlSyntaxNode/THtmlAttributeSyntaxNodeMap';
import IArgumentSyntaxNode from '../ArgumentSyntaxNode/IArgumentSyntaxNode';

export const strings = {
  NAME_INVALID:
    'The name argument passed to the InvocationSyntaxNode constructor was ' +
    'not a string with content.',

  SUBTYPE_INVALID:
    'The subtype argument passed to the InvocationSyntaxNode constructor ' +
    'was not a member of the InvocationSyntaxNodeSubtypes enum.',

  ARGUMENTS_INVALID:
    'The args argument passed to the InvocationSyntaxNode constructor ' +
    'was not an array.',

  ARGUMENT_INVALID:
    'One of the members of the args argument passed to the ' +
    'InvocationSyntaxNode constructor did not meet the isArgumentSyntaxNode ' +
    'type guard.',

  BODY_INVALID:
    'The body argument passed to the InvocationSyntaxNode constructor did ' +
    'not meet the isInvocationBodySyntaxNode typeguard.',
};

export abstract class InvocationSyntaxNode extends AbstractAbstractSyntaxNode implements IInvocationSyntaxNode {
  readonly type:      AbstractSyntaxNodeTypes.Invocation = AbstractSyntaxNodeTypes.Invocation;
  readonly subtype:   InvocationSyntaxNodeSubtypes;
  readonly name:      string;
  readonly arguments: Array<IArgumentSyntaxNode>;
  readonly body:      IInvocationBodySyntaxNode | null;

  constructor(
    name:             string,
    subtype:          InvocationSyntaxNodeSubtypes,
    args:             Array<IArgumentSyntaxNode> = [],
    body:             IInvocationBodySyntaxNode | null = null,
    attributes:       THtmlAttributeSyntaxNodeMap = {},
    location:         ILocation | null = null)
  {
    super(attributes, location);

    const subtypes = Object.values(InvocationSyntaxNodeSubtypes);
    if (typeof name !== 'string' || !name) {
      throw new Error(strings.NAME_INVALID);
    } else if (!subtypes.includes(subtype)) {
      throw new Error(strings.SUBTYPE_INVALID);
    } else if (!Array.isArray(args)) {
      throw new Error(strings.ARGUMENTS_INVALID);
    } else if (args.filter((aa) => {
      return isArgumentSyntaxNode(aa);
    }).length !== args.length)
    {
      throw new Error(strings.ARGUMENT_INVALID);
    } else if (arguments.length >= 4 &&
      body !== null &&
      !isInvocationBodySyntaxNode(body))
    {
      throw new Error(strings.BODY_INVALID);
    }

    this.subtype  = subtype;
    this.body     = body;
  }
}

export default InvocationSyntaxNode;