import {
  AbstractReservedWordSyntaxNode,
} from '../../AbstractReservedWordSyntaxNode';
import {
  ComparatorWordSyntaxNodeSubtypes,
} from '../ComparatorWordSyntaxNodeSubtypes';
import {
  ILesserThanOrEqualWordSyntaxNode,
} from './ILesserThanOrEqualWordSyntaxNode';
import {
  ILocation,
} from '../../../../ILocation';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from '../../../HtmlElementSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export const strings = {
  SOURCE_INVALID:
    'The source argument passed to the LesserThanOrEqualWordSyntaxNode ' +
    'constructor was neither "lt" nor "<".',
}

export class LesserThanOrEqualWordSyntaxNode extends AbstractReservedWordSyntaxNode implements ILesserThanOrEqualWordSyntaxNode {
  readonly subtype: ComparatorWordSyntaxNodeSubtypes.LesserThanOrEqualWord;
  readonly source:  'lte' | '<=';

  constructor(
    source:         'lte' | '<=',
    attributes:     THtmlElementAttributeSyntaxNodeMap = {},
    location:       ILocation | null = null)
  {
    super(source, attributes, location);

    if (source !== 'lte' && source !== '<=') {
      throw new Error(strings.SOURCE_INVALID);
    }
  }
}

export default LesserThanOrEqualWordSyntaxNode;