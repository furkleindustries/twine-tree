import {
  AbstractReservedWordSyntaxNode,
} from '../../AbstractReservedWordSyntaxNode';
import {
  AssignmentWordSyntaxNodeSubtypes,
} from '../AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentModuloWordSyntaxNode,
} from './IAssignmentModuloWordSyntaxNode';
import {
  ISourceLocation,
} from '../../../../SourceLocation/ISourceLocation';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from '../../../HtmlSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export const strings = {
  SOURCE_INVALID:
    'The source argument passed to the AssignmentModuloWordSyntaxNode ' +
    'constructor was neither "moduloequals", "modulo-equals", nor "%=".',
};

export class AssignmentModuloWordSyntaxNode extends AbstractReservedWordSyntaxNode implements IAssignmentModuloWordSyntaxNode {
  readonly subtype: AssignmentWordSyntaxNodeSubtypes.AssignmentModuloWord;
  readonly source:  'moduloequals' | 'modulo-equals' | '%=';

  constructor(
    source:         'moduloequals' | 'modulo-equals' | '%=',
    attributes:     THtmlElementAttributeSyntaxNodeMap = {},
    location:       ISourceLocation | null = null)
  {
    super(source, attributes, location);

    if (source !== 'moduloequals' &&
      source !== 'modulo-equals' &&
      source !== '%=')
    {
      throw new Error(strings.SOURCE_INVALID);
    }
  }
}

export default AssignmentModuloWordSyntaxNode;