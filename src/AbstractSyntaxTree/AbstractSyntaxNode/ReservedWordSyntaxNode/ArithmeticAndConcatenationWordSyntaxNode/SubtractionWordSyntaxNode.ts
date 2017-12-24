import {
  AbstractReservedWordSyntaxNode,
} from '../AbstractReservedWordSyntaxNode';
import {
  ArithmeticAndConcatenationWordSyntaxNodeSubtypes,
} from './ArithmeticAndConcatenationWordSyntaxNodeSubtypes';
import {
  ISubtractionWordSyntaxNode,
} from './ISubtractionWordSyntaxNode';
import {
  ILocation,
} from '../../../ILocation';
import {
  THtmlAttributeSyntaxNodeMap,
} from '../../HtmlSyntaxNode/THtmlAttributeSyntaxNodeMap';

export const strings = {
  SOURCE_INVALID:
    ''
};

export class SubtractionWordSyntaxNode extends AbstractReservedWordSyntaxNode implements ISubtractionWordSyntaxNode {
  readonly subtype: ArithmeticAndConcatenationWordSyntaxNodeSubtypes.SubtractionWord;
  readonly source:  'minus' | '-';
  
  constructor(
    source:         'minus' | '-',
    attributes:     THtmlAttributeSyntaxNodeMap = {},
    location:       ILocation | null = null)
  {
    super(source, attributes, location);

    if (source !== 'minus' && source !== '-') {
      throw new Error(strings.SOURCE_INVALID);
    }
  }
}

export default SubtractionWordSyntaxNode;