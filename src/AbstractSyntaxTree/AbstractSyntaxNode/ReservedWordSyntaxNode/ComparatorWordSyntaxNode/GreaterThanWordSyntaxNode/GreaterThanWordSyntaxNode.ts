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
    'The source argument passed to the GreaterThanWordSyntaxNode ' +
    'constructor was neither "gt" nor ">".',
}

export class GreaterThanWordSyntaxNode extends AbstractReservedWordSyntaxNode implements IGreaterThanWordSyntaxNode {
  readonly subtype: ComparatorWordSyntaxNodeSubtypes.GreaterThanWord;
  readonly source:  'gt' | '>';

  constructor(
    source:         'gt' | '>',
    attributes:     THtmlElementAttributeSyntaxNodeMap = {},
    location:       ILocation | null = null)
  {
    super(source, attributes, location);

    if (source !== 'gt' && source !== '>') {
      throw new Error(strings.SOURCE_INVALID);
    }
  }
}

export default GreaterThanWordSyntaxNode;