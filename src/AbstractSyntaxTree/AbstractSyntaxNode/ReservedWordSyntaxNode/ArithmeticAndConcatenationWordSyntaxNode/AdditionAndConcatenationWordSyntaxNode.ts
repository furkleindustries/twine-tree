import {
  AbstractReservedWordSyntaxNode,
} from '../AbstractReservedWordSyntaxNode';
import {
  ArithmeticAndConcatenationWordSyntaxNodeSubtypes,
} from './ArithmeticAndConcatenationWordSyntaxNodeSubtypes';
import {
  IAdditionAndConcatenationWordSyntaxNode,
} from './IAdditionAndConcatenationWordSyntaxNode';
import {
  ILocation,
} from '../../../ILocation';
import {
  THtmlAttributeSyntaxNodeMap,
} from '../../HtmlSyntaxNode/THtmlAttributeSyntaxNodeMap';

export const strings = {
  SOURCE_INVALID:
    'The source argument passed to the ' +
    'AdditionAndConcatenationWordSyntaxNode constructor was neither "plus" ' +
    'nor "+".',
};

export class AdditionAndConcatenationWordSyntaxNode extends AbstractReservedWordSyntaxNode implements IAdditionAndConcatenationWordSyntaxNode {
  readonly subtype: ArithmeticAndConcatenationWordSyntaxNodeSubtypes.AdditionAndConcatenationWord;
  readonly source:  'plus' | '+';

  constructor(
    source:         'plus' | '+',
    attributes:     THtmlAttributeSyntaxNodeMap = {},
    location:       ILocation | null = null)
  {
    super(source, attributes, location);

    if (source !== 'plus' && source !== '+') {
      throw new Error(strings.SOURCE_INVALID);
    }
  }
}

export default AdditionAndConcatenationWordSyntaxNode;