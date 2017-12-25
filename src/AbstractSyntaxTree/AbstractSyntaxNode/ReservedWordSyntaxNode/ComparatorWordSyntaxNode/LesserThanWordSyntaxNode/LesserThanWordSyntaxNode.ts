import {
  AbstractReservedWordSyntaxNode,
} from '../../AbstractReservedWordSyntaxNode';
import {
  ComparatorWordSyntaxNodeSubtypes,
} from '../ComparatorWordSyntaxNodeSubtypes';
import {
  ILesserThanWordSyntaxNode,
} from './ILesserThanWordSyntaxNode';
import {
  ILocation,
} from '../../../../ILocation';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from '../../../HtmlElementSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export const strings = {
  SOURCE_INVALID:
    'The source argument passed to the LesserThanWordSyntaxNode constructor ' +
    'was neither "lt" nor "<".',
}

export class LesserThanWordSyntaxNode extends AbstractReservedWordSyntaxNode implements ILesserThanWordSyntaxNode {
  readonly subtype: ComparatorWordSyntaxNodeSubtypes.LesserThanWord;
  readonly source:  'lt' | '<';

  constructor(
    source:         'lt' | '<',
    attributes:     THtmlElementAttributeSyntaxNodeMap = {},
    location:       ILocation | null = null)
  {
    super(source, attributes, location);

    if (source !== 'lt' && source !== '<') {
      throw new Error(strings.SOURCE_INVALID);
    }
  }
}

export default LesserThanWordSyntaxNode;