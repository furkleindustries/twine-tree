import {
  AbstractReservedWordSyntaxNode,
} from '../AbstractReservedWordSyntaxNode';
import {
  AssignmentWordSyntaxNodeSubtypes,
} from './AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentMultiplierWordSyntaxNode,
} from './IAssignmentMultiplierWordSyntaxNode';
import {
  ILocation,
} from '../../../ILocation';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from '../../HtmlElementSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export const strings = {
  SOURCE_INVALID:
    'The source argument passed to the AssignmentMultiplierWordSyntaxNoe ' +
    'constructor was neither "multiplyequals", "multiply-equals", nor "*=".',
}

export class AssignmentMultiplierWordSyntaxNode extends AbstractReservedWordSyntaxNode implements IAssignmentMultiplierWordSyntaxNode {
  readonly subtype: AssignmentWordSyntaxNodeSubtypes.AssignmentMultiplierWord;
  readonly source:  'multiplyequals' | 'multiply-equals' | '*=';

  constructor(
    source:         'multiplyequals' | 'multiply-equals' | '*=',
    attributes:     THtmlElementAttributeSyntaxNodeMap = {},
    location:       ILocation | null = null)
  {
    super(source, attributes, location);

    if (source !== 'multiplyequals' &&
      source !== 'multiply-equals' &&
      source !== '*=')
    {
      throw new Error(strings.SOURCE_INVALID);
    }
  }
}

export default AssignmentMultiplierWordSyntaxNode;