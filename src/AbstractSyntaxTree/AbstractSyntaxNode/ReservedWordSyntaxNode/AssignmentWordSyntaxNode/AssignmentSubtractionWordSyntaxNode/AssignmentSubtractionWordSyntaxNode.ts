import {
  AbstractReservedWordSyntaxNode,
} from '../../AbstractReservedWordSyntaxNode';
import {
  AssignmentWordSyntaxNodeSubtypes,
} from '../AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentSubtractionWordSyntaxNode,
} from './IAssignmentSubtractionWordSyntaxNode';
import {
  ISourceLocation,
} from '../../../../SourceLocation/ISourceLocation';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from '../../../HtmlSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export const strings = {
  SOURCE_INVALID:
    'The source argument passed to the AssignmentSubtractionWordSyntaxNode ' +
    'constructor was neither "minusequals", "minus-equals", nor "-=".',
};

export class AssignmentSubtractionWordSyntaxNode extends AbstractReservedWordSyntaxNode implements IAssignmentSubtractionWordSyntaxNode {
  readonly subtype: AssignmentWordSyntaxNodeSubtypes.AssignmentSubtractionWord;
  readonly source:  'minusequals' | 'minus-equals' | '-=';
  
  constructor(
    source:         'minusequals' | 'minus-equals' | '-=',
    attributes:     THtmlElementAttributeSyntaxNodeMap = {},
    location:       ISourceLocation | null = null)
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

export default AssignmentSubtractionWordSyntaxNode;