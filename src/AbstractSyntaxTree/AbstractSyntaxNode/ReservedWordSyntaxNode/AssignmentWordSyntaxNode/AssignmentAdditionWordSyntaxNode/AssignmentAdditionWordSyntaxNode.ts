import {
  AbstractReservedWordSyntaxNode,
} from '../../AbstractReservedWordSyntaxNode';
import {
  AssignmentWordSyntaxNodeSubtypes,
} from '../AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentAdditionWordSyntaxNode,
} from './IAssignmentAdditionWordSyntaxNode';
import {
  ISourceLocation,
} from '../../../../SourceLocation/ISourceLocation';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from '../../../HtmlSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export const strings = {
  SOURCE_INVALID:
    'The source argument passed to the AssignmentAdditionWordSyntaxNode ' +
    'constructor was neither "plusequals", "plus-equals", nor "+=".',
}

export class AssignmentAdditionWordSyntaxNode extends AbstractReservedWordSyntaxNode implements IAssignmentAdditionWordSyntaxNode {
  readonly subtype: AssignmentWordSyntaxNodeSubtypes.AssignmentAdditionWord;
  readonly source:  'plusequals' | 'plus-equals' | '+=';

  constructor(
    source:         'plusequals' | 'plus-equals' | '+=',
    attributes:     THtmlElementAttributeSyntaxNodeMap = {},
    location:       ISourceLocation | null = null)
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

export default AssignmentAdditionWordSyntaxNode;