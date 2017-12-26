import {
  AbstractAbstractSyntaxNode,
} from '../../AbstractAbstractSyntaxNode';
import {
  AbstractSyntaxNodeTypes,
} from '../../AbstractSyntaxNodeTypes';
import {
  IHtmlElementAttributeSyntaxNode,
} from './IHtmlElementAttributeSyntaxNode';
import {
  ISourceLocation,
} from '../../../SourceLocation/ISourceLocation';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from './THtmlElementAttributeSyntaxNodeMap';

export const strings = {
  KEY_INVALID:
    'The key argument passed to the ArgumentSyntaxNode constructor was ' +
    'not a string with content.',

  VALUE_INVALID:
    'The value argument passed to the ArgumentSyntaxNode constructor was ' +
    'not a string.',
};

export abstract class HtmlElementAttributeSyntaxNode extends AbstractAbstractSyntaxNode implements IHtmlElementAttributeSyntaxNode {
  readonly type:  AbstractSyntaxNodeTypes.HtmlElementAttribute = AbstractSyntaxNodeTypes.HtmlElementAttribute;
  readonly key:   string;
  readonly value: string;

  constructor(
    key:          string,
    value:        string,
    attributes:   THtmlElementAttributeSyntaxNodeMap,
    location:     ISourceLocation | null = null)
  {
    super(attributes, location);

    if (typeof key !== 'string' || !key) {
      throw new Error(strings.KEY_INVALID);
    } else if (typeof value !== 'string') {
      throw new Error(strings.VALUE_INVALID);
    }

    this.key   = key;
    this.value = value;
  }
}

export default HtmlElementAttributeSyntaxNode;