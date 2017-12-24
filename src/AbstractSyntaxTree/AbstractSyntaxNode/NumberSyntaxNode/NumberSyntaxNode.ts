import {
  AbstractAbstractSyntaxNode,
} from '../AbstractAbstractSyntaxNode';
import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  NumberSyntaxNodeSubtypes,
} from './NumberSyntaxNodeSubtypes';
import {
  INumberSyntaxNode,
} from './INumberSyntaxNode';
import {
  ILocation,
} from '../../ILocation';
import {
  THtmlAttributeSyntaxNodeMap,
} from '../HtmlSyntaxNode/THtmlAttributeSyntaxNodeMap';

export const strings = {
  VALUE_INVALID:
    'The value argument passed to the NumberSyntaxNode constructor was not ' +
    'a non-NaN number.',

  SUBTYPE_INVALID:
    'The subtype argument passed to the NumberSyntaxNode constructor was ' +
    'not a member of the NumberSyntaxNodeSubtypes enum.',
};

export abstract class NumberSyntaxNode extends AbstractAbstractSyntaxNode implements INumberSyntaxNode {
  readonly type:    AbstractSyntaxNodeTypes.Number = AbstractSyntaxNodeTypes.Number;
  readonly subtype: NumberSyntaxNodeSubtypes;
  readonly value:   number;

  constructor(
    value:          number,
    subtype:        NumberSyntaxNodeSubtypes,
    attributes:     THtmlAttributeSyntaxNodeMap = {},
    location:       ILocation | null = null)
  {
    super(attributes, location);

    const subtypes = Object.values(NumberSyntaxNodeSubtypes);
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new Error(strings.VALUE_INVALID);
    } else if (!subtypes.includes(subtype)) {
      throw new Error(strings.SUBTYPE_INVALID);
    }

    this.value    = value;
    this.subtype  = subtype;
  }
}

export default NumberSyntaxNode;