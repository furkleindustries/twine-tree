import {
  AbstractReservedWordSyntaxNode,
} from '../AbstractReservedWordSyntaxNode';
import {
  AssignmentWordSyntaxNodeSubtypes,
} from './AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentDividerWordSyntaxNode,
} from './IAssignmentDividerWordSyntaxNode';
import {
  ILocation,
} from '../../../ILocation';
import {
  THtmlAttributeSyntaxNodeMap,
} from '../../HtmlSyntaxNode/THtmlAttributeSyntaxNodeMap';

export const strings = {
  SOURCE_INVALID:
    'The source property passed to the AssignmentDividerWordSyntaxNode ' +
    'constructor was neither "divideequals", "divide-equals", nor "/=".'
};

export class AssignmentDividerWordSyntaxNode extends AbstractReservedWordSyntaxNode implements IAssignmentDividerWordSyntaxNode {
  readonly subtype: AssignmentWordSyntaxNodeSubtypes.AssignmentDividerWord;
  readonly source:  'divideequals' | 'divide-equals' | '/=';
  
  constructor(
    source:         'divideequals' | 'divide-equals' | '/=',
    attributes:     THtmlAttributeSyntaxNodeMap = {},
    location:       ILocation | null = null)
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

export default AssignmentDividerWordSyntaxNode;