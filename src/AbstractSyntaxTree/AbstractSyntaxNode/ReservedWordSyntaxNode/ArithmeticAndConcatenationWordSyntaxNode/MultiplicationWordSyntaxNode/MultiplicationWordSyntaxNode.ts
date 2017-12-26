import {
  AbstractReservedWordSyntaxNode,
} from '../../AbstractReservedWordSyntaxNode';
import {
  ArithmeticAndConcatenationWordSyntaxNodeSubtypes,
} from '../ArithmeticAndConcatenationWordSyntaxNodeSubtypes';
import {
  IMultiplicationWordSyntaxNode,
} from './IMultiplicationWordSyntaxNode';
import {
  ISourceLocation,
} from '../../../../SourceLocation/ISourceLocation';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from '../../../HtmlSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export const strings = {
  SOURCE_INVALID:
    'The source argument passed to the MultiplicationWordSyntaxNode ' +
    'constructor was neither "times" nor "*".',
};

export class MultiplicationWordSyntaxNode extends AbstractReservedWordSyntaxNode implements IMultiplicationWordSyntaxNode {
  readonly subtype: ArithmeticAndConcatenationWordSyntaxNodeSubtypes.MultiplicationWord;
  readonly source:  'times' | '*';

  constructor(
    source:         'times' | '*',
    attributes:     THtmlElementAttributeSyntaxNodeMap = {},
    location:       ISourceLocation | null = null)
  {
    super(source, attributes, location);

    if (source !== 'times' && source !== '*') {
      throw new Error(strings.SOURCE_INVALID);
    }
  }
}

export default MultiplicationWordSyntaxNode;