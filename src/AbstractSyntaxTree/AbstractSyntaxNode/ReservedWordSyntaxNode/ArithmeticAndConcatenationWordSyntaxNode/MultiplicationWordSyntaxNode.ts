import {
  AbstractReservedWordSyntaxNode,
} from '../AbstractReservedWordSyntaxNode';
import {
  ArithmeticAndConcatenationWordSyntaxNodeSubtypes,
} from './ArithmeticAndConcatenationWordSyntaxNodeSubtypes';
import {
  IMultiplicationWordSyntaxNode,
} from './IMultiplicationWordSyntaxNode';
import {
  ILocation,
} from '../../../ILocation';
import {
  THtmlAttributeSyntaxNodeMap,
} from '../../HtmlSyntaxNode/THtmlAttributeSyntaxNodeMap';

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
    attributes:     THtmlAttributeSyntaxNodeMap = {},
    location:       ILocation | null = null)
  {
    super(source, attributes, location);

    if (source !== 'times' && source !== '*') {
      throw new Error(strings.SOURCE_INVALID);
    }
  }
}

export default MultiplicationWordSyntaxNode;