import {
  AbstractAbstractSyntaxNode,
} from '../AbstractAbstractSyntaxNode';
import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  IReservedWordSyntaxNode,
} from './IReservedWordSyntaxNode';
import {
  ISourceLocation,
} from '../../SourceLocation/ISourceLocation';
import {
  ReservedWordSyntaxNodeSubtypes,
} from './ReservedWordSyntaxNodeSubtypes';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from '../HtmlSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export const strings = {
  SOURCE_INVALID:
    'The source argument passed to the AbstractReservedWordSyntaxNode ' +
    'constructor was not a string with content.',
};

export abstract class AbstractReservedWordSyntaxNode extends AbstractAbstractSyntaxNode implements IReservedWordSyntaxNode {
  readonly type:    AbstractSyntaxNodeTypes.ReservedWord;
  readonly subtype: ReservedWordSyntaxNodeSubtypes;
  readonly source:  string;

  constructor(
    source:         string,
    attributes:     THtmlElementAttributeSyntaxNodeMap = {},
    location:       ISourceLocation | null = null)
  {
    super(attributes, location);

    if (typeof source !== 'string' || !source) {
      throw new Error(strings.SOURCE_INVALID);
    }

    this.source = source;
  }
}

export default AbstractReservedWordSyntaxNode;