import {
  AbstractAbstractSyntaxNode,
} from '../AbstractAbstractSyntaxNode';
import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  IHtmlAttributeSyntaxNode,
} from '../HtmlSyntaxNode/IHtmlAttributeSyntaxNode';
import {
  ILocation,
} from '../../ILocation';
import {
 THtmlAttributeSyntaxNodeMap,
} from './THtmlAttributeSyntaxNodeMap';

export const strings = {
  KEY_INVALID:
    'The key argument passed to the ArgumentSyntaxNode constructor was ' +
    'not a string with content.',

  VALUE_INVALID:
    'The value argument passed to the ArgumentSyntaxNode constructor was ' +
    'not a string.',
};

export abstract class HtmlAttributeSyntaxNode extends AbstractAbstractSyntaxNode implements IHtmlAttributeSyntaxNode {
  readonly type:  AbstractSyntaxNodeTypes.HtmlElementAttribute = AbstractSyntaxNodeTypes.HtmlElementAttribute;
  readonly key:   string;
  readonly value: string;

  constructor(
    key:          string,
    value:        string,
    attributes:   THtmlAttributeSyntaxNodeMap,
    location:     ILocation | null = null)
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

export default HtmlAttributeSyntaxNode;