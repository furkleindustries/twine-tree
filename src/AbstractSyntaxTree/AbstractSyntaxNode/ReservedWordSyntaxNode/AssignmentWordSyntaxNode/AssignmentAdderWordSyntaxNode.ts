import {
  AbstractReservedWordSyntaxNode,
} from '../AbstractReservedWordSyntaxNode';
import {
  AssignmentWordSyntaxNodeSubtypes,
} from './AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentAdderWordSyntaxNode,
} from './IAssignmentAdderWordSyntaxNode';
import {
  ILocation,
} from '../../../ILocation';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from '../../HtmlElementSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export const strings = {
  SOURCE_INVALID:
    'The source argument passed to the AssignmentAdderWordSyntaxNode ' +
    'constructor was neither "plusequals", "plus-equals", nor "+=".',
}

export class AssignmentAdderWordSyntaxNode extends AbstractReservedWordSyntaxNode implements IAssignmentAdderWordSyntaxNode {
  readonly subtype: AssignmentWordSyntaxNodeSubtypes.AssignmentAdderWord;
  readonly source:  'plusequals' | 'plus-equals' | '+=';

  constructor(
    source:         'plusequals' | 'plus-equals' | '+=',
    attributes:     THtmlElementAttributeSyntaxNodeMap = {},
    location:       ILocation | null = null)
  {
    super(source, attributes, location);

    if (source !== 'plusequals' &&
      source !== 'plus-equals' &&
      source !== '+=')
    {
      throw new Error(strings.SOURCE_INVALID);
    }
  }
}

export default AssignmentAdderWordSyntaxNode;