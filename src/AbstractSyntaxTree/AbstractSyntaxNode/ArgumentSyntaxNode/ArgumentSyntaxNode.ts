import {
  AbstractAbstractSyntaxNode,
} from '../AbstractAbstractSyntaxNode';
import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  ArgumentSyntaxNodeSubtypes,
} from './ArgumentSyntaxNodeSubtypes';
import {
  IArgumentSyntaxNode,
} from './IArgumentSyntaxNode';
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
  VALUE_INVALID:
    'The value argument passed to the ArgumentSyntaxNode constructor did ' +
    'not meet the isAbstractSyntaxContent type guard.',
};

export abstract class ArgumentSyntaxNode extends AbstractAbstractSyntaxNode implements IArgumentSyntaxNode {
  readonly type:    AbstractSyntaxNodeTypes.Argument = AbstractSyntaxNodeTypes.Argument;
  readonly subtype: ArgumentSyntaxNodeSubtypes;
  value:            TAbstractSyntaxContent;

  constructor(
    value:          TAbstractSyntaxContent,
    attributes:     THtmlElementAttributeSyntaxNodeMap = {},
    location:       ILocation | null = null)
  {
    super(attributes, location);

    if (!isAbstractSyntaxContent(value)) {
      throw new Error(strings.VALUE_INVALID);
    }

    this.value = value;
  }
}

export default ArgumentSyntaxNode;