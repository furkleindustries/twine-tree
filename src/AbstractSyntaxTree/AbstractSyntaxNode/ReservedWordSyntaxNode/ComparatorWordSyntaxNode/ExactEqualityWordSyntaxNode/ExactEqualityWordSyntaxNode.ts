import {
  AbstractReservedWordSyntaxNode,
} from '../../AbstractReservedWordSyntaxNode';
import {
  ComparatorWordSyntaxNodeSubtypes,
} from '../ComparatorWordSyntaxNodeSubtypes';
import {
  IExactEqualityWordSyntaxNode,
} from './IExactEqualityWordSyntaxNode';
import {
  ISourceLocation,
} from '../../../../SourceLocation/ISourceLocation';
import { 
  THtmlElementAttributeSyntaxNodeMap,
} from '../../../HtmlSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export const strings = {
  SOURCE_INVALID:
    'The source argument passed to the ExactEqualityWordSyntaxNode ' +
    'constructor was neither "is" nor "===".',
};

export class ExactEqualityWordSyntaxNode extends AbstractReservedWordSyntaxNode implements IExactEqualityWordSyntaxNode {
  readonly subtype: ComparatorWordSyntaxNodeSubtypes.ExactEqualityWord;
  readonly source:  'is' | '===';

  constructor(
    source:         'is' | '===',
    attributes:     THtmlElementAttributeSyntaxNodeMap = {},
    location:       ISourceLocation | null = null)
  {
    super(source, attributes, location);

    if (source !== 'is' && source !== '===') {
      throw new Error(strings.SOURCE_INVALID);
    }
  }
}

export default ExactEqualityWordSyntaxNode;