import {
  AbstractReservedWordSyntaxNode,
} from '../../AbstractReservedWordSyntaxNode';
import {
  ComparatorWordSyntaxNodeSubtypes,
} from '../ComparatorWordSyntaxNodeSubtypes';
import {
  IGreaterThanWordSyntaxNode,
} from './IGreaterThanWordSyntaxNode';
import {
  ILocation,
} from '../../../../ILocation';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from '../../../HtmlElementSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export const strings = {
  SOURCE_INVALID:
    'The source argument passed to the GreaterThanOrEqualWordSyntaxNode ' +
    'constructor was neither "gte" nor ">=".',
}

export class GreaterThanWordSyntaxNode extends AbstractReservedWordSyntaxNode implements IGreaterThanWordSyntaxNode {
  readonly subtype: ComparatorWordSyntaxNodeSubtypes.GreaterThanOrEqualWord;
  readonly source:  'gte' | '>=';

  constructor(
    source:         'gte' | '>=',
    attributes:     THtmlElementAttributeSyntaxNodeMap = {},
    location:       ILocation | null = null)
  {
    super(source, attributes, location);

    if (source !== 'gte' && source !== '>=') {
      throw new Error(strings.SOURCE_INVALID);
    }
  }
}

export default GreaterThanOrEqualWordSyntaxNode;