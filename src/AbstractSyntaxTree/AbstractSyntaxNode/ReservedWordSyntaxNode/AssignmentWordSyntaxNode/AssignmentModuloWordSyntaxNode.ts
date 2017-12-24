import {
  AbstractReservedWordSyntaxNode,
} from '../AbstractReservedWordSyntaxNode';
import {
  AssignmentWordSyntaxNodeSubtypes,
} from './AssignmentWordSyntaxNodeSubtypes';
import {
  IAssignmentModuloWordSyntaxNode,
} from './IAssignmentModuloWordSyntaxNode';
import {
  ILocation,
} from '../../../ILocation';
import {
  THtmlAttributeSyntaxNodeMap,
} from '../../HtmlSyntaxNode/THtmlAttributeSyntaxNodeMap';

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
    attributes:     THtmlAttributeSyntaxNodeMap = {},
    location:       ILocation | null = null)
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