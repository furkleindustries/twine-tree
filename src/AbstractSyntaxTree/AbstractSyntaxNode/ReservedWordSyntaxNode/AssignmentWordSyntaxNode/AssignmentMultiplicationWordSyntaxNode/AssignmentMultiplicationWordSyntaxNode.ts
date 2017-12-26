import {
  AbstractReservedWordSyntaxNode,
} from '../../AbstractReservedWordSyntaxNode';
import {
  AssignmentWordSyntaxNodeSubtypes,
} from '../AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentMultiplicationWordSyntaxNode,
} from './IAssignmentMultiplicationWordSyntaxNode';
import {
  ISourceLocation,
} from '../../../../SourceLocation/ISourceLocation';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from '../../../HtmlSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export const strings = {
  SOURCE_INVALID:
    'The source argument passed to the AssignmentMultiplicationWordSyntaxNoe ' +
    'constructor was neither "multiplyequals", "multiply-equals", nor "*=".',
}

export class AssignmentMultiplicationWordSyntaxNode extends AbstractReservedWordSyntaxNode implements IAssignmentMultiplicationWordSyntaxNode {
  readonly subtype: AssignmentWordSyntaxNodeSubtypes.AssignmentMultiplicationWord;
  readonly source:  'multiplyequals' | 'multiply-equals' | '*=';

  constructor(
    source:         'multiplyequals' | 'multiply-equals' | '*=',
    attributes:     THtmlElementAttributeSyntaxNodeMap = {},
    location:       ISourceLocation | null = null)
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

export default AssignmentMultiplicationWordSyntaxNode;