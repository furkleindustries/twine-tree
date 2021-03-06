import {
  AbstractAbstractSyntaxNode,
} from '../AbstractAbstractSyntaxNode';
import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  ISourceLocation,
} from '../../SourceLocation/ISourceLocation';
import {
  IStringSyntaxNode,
} from './IStringSyntaxNode';
import {
  StringSyntaxNodeSubtypes,
} from './StringSyntaxNodeSubtypes';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from '../HtmlSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export const strings = {
  VALUE_INVALID:
    'The value argument passed to the StringSyntaxNode constructor was not ' +
    'a string with content.',

  SUBTYPE_INVALID:
    'The subtype argumument passed to the StringSyntaxNode constructor was ' +
    'not a member of the StringSyntaxNodeSubtypes enum.',
}

export class StringSyntaxNode extends AbstractAbstractSyntaxNode implements IStringSyntaxNode {
  readonly type:    AbstractSyntaxNodeTypes.String;
  readonly subtype: StringSyntaxNodeSubtypes;
  readonly value:   string;

  constructor(
    value:          string,
    subtype:        StringSyntaxNodeSubtypes,
    attributes:     THtmlElementAttributeSyntaxNodeMap = {},
    location:       ISourceLocation | null = null)
  {
    super(attributes, location);

    if (typeof value !== 'string' || !value) {
      throw new Error(strings.VALUE_INVALID);
    } else if (!Object.values(StringSyntaxNodeSubtypes).includes(subtype)) {
      throw new Error(strings.SUBTYPE_INVALID);
    }

    this.value   = value;
    this.subtype = subtype;
  }
}

export default StringSyntaxNode;