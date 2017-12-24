import {
  AbstractAbstractSyntaxNode,
} from '../AbstractAbstractSyntaxNode';
import {
  ILocation,
} from '../../ILocation';
import {
  IVariableSyntaxNode,
} from './IVariableSyntaxNode';
import {
  THtmlAttributeSyntaxNodeMap,
} from '../HtmlSyntaxNode/THtmlAttributeSyntaxNodeMap';
import {
  VariableSyntaxNodeSubtypes,
} from './VariableSyntaxNodeSubtypes';

export const strings = {
  NAME_INVALID:
    'The name argument passed to the VariableSyntaxNode constructor was not ' +
    'a string with content.',

  SUBTYPE_INVALID:
    'The subtype argument passed to the VariableSyntaxNode constructor was ' +
    'not a member of the VariableSyntaxNodeSubtypes enum.',
};

export class VariableSyntaxNode extends AbstractAbstractSyntaxNode implements IVariableSyntaxNode {
  readonly name:    string;
  readonly subtype: VariableSyntaxNodeSubtypes;

  constructor(
    name:           string,
    subtype:        VariableSyntaxNodeSubtypes,
    attributes:     THtmlAttributeSyntaxNodeMap,
    location:       ILocation | null)
  {
    super(attributes, location);

    if (typeof name !== 'string' || !name) {
      throw new Error(strings.NAME_INVALID);
    } else if (!Object.values(VariableSyntaxNodeSubtypes).includes(subtype)) {
      throw new Error(strings.SUBTYPE_INVALID);
    }

    this.name    = name;
    this.subtype = subtype;
  }
}