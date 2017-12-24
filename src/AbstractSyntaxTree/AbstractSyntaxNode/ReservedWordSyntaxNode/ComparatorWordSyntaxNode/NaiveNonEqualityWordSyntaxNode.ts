import {
  AbstractReservedWordSyntaxNode,
} from '../AbstractReservedWordSyntaxNode';
import {
  ComparatorWordSyntaxNodeSubtypes,
} from './ComparatorWordSyntaxNodeSubtypes';
import {
  ILocation,
} from '../../../ILocation';
import {
  INaiveNonEqualityWordSyntaxNode,
} from './INaiveNonEqualityWordSyntaxNode';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from '../../HtmlElementSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export const strings = {
  SOURCE_INVALID:
    'The source argument passed to the NaiveNonEqualityWordSyntaxNode ' +
    'constructor was neither "neq" nor "!=".',
};

export class NaiveNonEqualityWordSyntaxNode extends AbstractReservedWordSyntaxNode implements INaiveNonEqualityWordSyntaxNode {
  readonly subtype: ComparatorWordSyntaxNodeSubtypes.NaiveNonEqualityWord;
  readonly source:  'neq' | '!=';

  constructor(
    source:         'neq' | '!=',
    attributes:     THtmlElementAttributeSyntaxNodeMap = {},
    location:       ILocation | null = null)
  {
    super(source, attributes, location);

    if (source !== 'neq' && source !== '!=') {
      throw new Error(strings.SOURCE_INVALID);
    }
  }
}

export default NaiveNonEqualityWordSyntaxNode;