import {
  AbstractReservedWordSyntaxNode,
} from '../../AbstractReservedWordSyntaxNode';
import {
  ArithmeticAndConcatenationWordSyntaxNodeSubtypes,
} from '../ArithmeticAndConcatenationWordSyntaxNodeSubtypes';
import {
  IDivisionWordSyntaxNode,
} from './IDivisionWordSyntaxNode';
import {
  ISourceLocation,
} from '../../../../SourceLocation/ISourceLocation';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from '../../../HtmlSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export const strings = {
  SOURCE_INVALID:
    'The source argument passed to the DivisionWordSyntaxNode constructor ' +
    'was neither "dividedby", "divided-by", nor "/".'
};

export class DivisionWordSyntaxNode extends AbstractReservedWordSyntaxNode implements IDivisionWordSyntaxNode {
  readonly subtype: ArithmeticAndConcatenationWordSyntaxNodeSubtypes.DivisionWord;
  readonly source:  'dividedby' | 'divided-by' | '/';
  
  constructor(
    source:         'dividedby' | 'divided-by' | '/',
    attributes:     THtmlElementAttributeSyntaxNodeMap = {},
    location:       ISourceLocation | null = null)
  {
    super(source, attributes, location);

    if (source !== 'dividedby' &&
      source !== 'divided-by' &&
      source !== '/')
    {
      throw new Error(strings.SOURCE_INVALID);
    }
  }
}

export default DivisionWordSyntaxNode;