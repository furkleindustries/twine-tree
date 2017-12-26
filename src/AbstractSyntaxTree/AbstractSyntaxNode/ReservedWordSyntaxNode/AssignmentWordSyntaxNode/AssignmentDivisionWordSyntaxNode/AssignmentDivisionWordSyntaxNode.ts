import {
  AbstractReservedWordSyntaxNode,
} from '../../AbstractReservedWordSyntaxNode';
import {
  AssignmentWordSyntaxNodeSubtypes,
} from '../AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentDivisionWordSyntaxNode,
} from './IAssignmentDivisionWordSyntaxNode';
import {
  ISourceLocation,
} from '../../../../SourceLocation/ISourceLocation';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from '../../../HtmlSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export const strings = {
  SOURCE_INVALID:
    'The source property passed to the AssignmentDivisionWordSyntaxNode ' +
    'constructor was neither "divideequals", "divide-equals", nor "/=".'
};

export class AssignmentDivisionWordSyntaxNode extends AbstractReservedWordSyntaxNode implements IAssignmentDivisionWordSyntaxNode {
  readonly subtype: AssignmentWordSyntaxNodeSubtypes.AssignmentDivisionWord;
  readonly source:  'divideequals' | 'divide-equals' | '/=';

  constructor(
    source:         'divideequals' | 'divide-equals' | '/=',
    attributes:     THtmlElementAttributeSyntaxNodeMap = {},
    location:       ISourceLocation | null = null)
  {
    super(source, attributes, location);

    if (source !== 'divideequals' &&
      source !== 'divide-equals' &&
      source !== '/=')
    {
      throw new Error(strings.SOURCE_INVALID);
    }
  }
}

export default AssignmentDivisionWordSyntaxNode;