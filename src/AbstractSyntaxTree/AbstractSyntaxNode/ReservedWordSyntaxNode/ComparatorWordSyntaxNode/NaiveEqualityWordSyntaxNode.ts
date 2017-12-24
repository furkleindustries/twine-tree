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
  INaiveEqualityWordSyntaxNode,
} from './INaiveEqualityWordSyntaxNode';
import {
  THtmlAttributeSyntaxNodeMap,
} from '../../HtmlSyntaxNode/THtmlAttributeSyntaxNodeMap';

export const strings = {
  SOURCE_INVALID:
    'The source argument passed to the NaiveEqualityWordSyntaxNode ' +
    'constructor was neither "eq" nor "==".',
};

export class NaiveEqualityWordSyntaxNode extends AbstractReservedWordSyntaxNode implements INaiveEqualityWordSyntaxNode {
  readonly subtype: ComparatorWordSyntaxNodeSubtypes.NaiveEqualityWord;
  readonly source:  'eq' | '==';

  constructor(
    source:         'eq' | '==',
    attributes:     THtmlAttributeSyntaxNodeMap = {},
    location:       ILocation | null = null)
  {
    super(source, attributes, location);

    if (source !== 'eq' && source !== '==') {
      throw new Error(strings.SOURCE_INVALID);
    }
  }
}

export default NaiveEqualityWordSyntaxNode;