import {
  AbstractReservedWordSyntaxNode,
} from '../AbstractReservedWordSyntaxNode';
import {
  ArithmeticAndConcatenationWordSyntaxNodeSubtypes,
} from './ArithmeticAndConcatenationWordSyntaxNodeSubtypes';
import {
  IModuloWordSyntaxNode,
} from './IModuloWordSyntaxNode';
import {
  ILocation,
} from '../../../ILocation';
import {
  THtmlAttributeSyntaxNodeMap,
} from '../../HtmlSyntaxNode/THtmlAttributeSyntaxNodeMap';

export const strings = {
  SOURCE_INVALID:
    'The source argument passed to the ModuloWordSynaxNode constructor was ' +
    'neither "modulo" nor "%".'
};

export class ModuloWordSyntaxNode extends AbstractReservedWordSyntaxNode implements IModuloWordSyntaxNode {
  readonly subtype: ArithmeticAndConcatenationWordSyntaxNodeSubtypes.ModuloWord;
  readonly source:  'modulo' | '%';
  
  constructor(
    source:         'modulo' | '%',
    attributes:     THtmlAttributeSyntaxNodeMap = {},
    location:       ILocation | null = null)
  {
    super(source, attributes, location);

    if (source !== 'modulo' && source !== '%') {
      throw new Error(strings.SOURCE_INVALID);
    }
  }
}

export default ModuloWordSyntaxNode;