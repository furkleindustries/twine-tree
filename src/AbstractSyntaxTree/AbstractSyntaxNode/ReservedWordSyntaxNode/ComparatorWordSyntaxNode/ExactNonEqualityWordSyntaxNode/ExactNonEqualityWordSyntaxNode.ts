import {
  AbstractReservedWordSyntaxNode,
} from '../../AbstractReservedWordSyntaxNode';
import {
  ComparatorWordSyntaxNodeSubtypes,
} from '../ComparatorWordSyntaxNodeSubtypes';
import {
  IExactNonEqualityWordSyntaxNode,
} from './IExactNonEqualityWordSyntaxNode';
import {
  ISourceLocation,
} from '../../../../SourceLocation/ISourceLocation';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from '../../../HtmlSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export const strings = {
  SOURCE_INVALID:
    'The source argument passed to the ExactNonEqualityWordSyntaxNode ' +
    'constructor was neither "isnot", "is-not", nor "!==".',
}

export class ExactNonEqualityWordSyntaxNode extends AbstractReservedWordSyntaxNode implements IExactNonEqualityWordSyntaxNode {
  readonly subtype: ComparatorWordSyntaxNodeSubtypes.ExactNonEqualityWord;
  readonly source:  'isnot' | 'is-not' | '!==';

  constructor(
    source:         'isnot' | 'is-not' | '!==',
    attributes:     THtmlElementAttributeSyntaxNodeMap = {},
    location:       ISourceLocation | null = null)
  {
    super(source, attributes, location);

    if (source !== 'isnot' && source !== 'is-not' && source !== '!==') {
      throw new Error(strings.SOURCE_INVALID);
    }
  }
}

export default ExactNonEqualityWordSyntaxNode;