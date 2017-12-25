import {
  AbstractReservedWordSyntaxNode,
} from '../../AbstractReservedWordSyntaxNode';
import {
  AssignmentWordSyntaxNodeSubtypes,
} from '../AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentSubtractorWordSyntaxNode,
} from './IAssignmentSubtractorWordSyntaxNode';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from '../../../HtmlElementSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';
import {
  ILocation,
} from '../../../../ILocation';

export const strings = {
  SOURCE_INVALID:
    'The source argument passed to the AssignmentSubtractorWordSyntaxNode ' +
    'constructor was neither "minusequals", "minus-equals", nor "-=".',
};

export class AssignmentSubtractorWordSyntaxNode extends AbstractReservedWordSyntaxNode implements IAssignmentSubtractorWordSyntaxNode {
  readonly subtype: AssignmentWordSyntaxNodeSubtypes.AssignmentSubtractorWord;
  readonly source:  'minusequals' | 'minus-equals' | '-=';
  
  constructor(
    source:         'minusequals' | 'minus-equals' | '-=',
    attributes:     THtmlElementAttributeSyntaxNodeMap = {},
    location:       ILocation | null = null)
  {
    super(source, attributes, location);

    if (source !== 'minusequals' &&
      source !== 'minus-equals' &&
      source !== '-=')
    {
      throw new Error(strings.SOURCE_INVALID);
    }
  }
}

export default AssignmentSubtractorWordSyntaxNode;