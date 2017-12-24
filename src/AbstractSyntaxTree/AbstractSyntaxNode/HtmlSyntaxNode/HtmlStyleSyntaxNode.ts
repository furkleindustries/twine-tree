import {
  AbstractHtmlElementSyntaxNode,
} from './AbstractHtmlElementSyntaxNode';
import {
  HtmlSyntaxNodeSubtypes,
} from './HtmlSyntaxNodeSubtypes';
import {
  IHtmlStyleSyntaxNode,
} from './IHtmlStyleSyntaxNode';
import {
  ILocation,
} from '../../ILocation';
import {
  isProgram,
} from '../../isProgram';
import {
  Stylesheet,
} from 'css';
import {
  THtmlAttributeSyntaxNodeMap,
} from '../HtmlSyntaxNode/THtmlAttributeSyntaxNodeMap';

export const strings = {
  CHILDREN_INVALID:
    'The children argument passed to the HtmlStyleSyntaxNode constructor ' +
    'was not an array with a single member.',

  CHILD_INVALID:
    'The single member of the children argument passed to the ' +
    'HtmlStyleSyntaxNode constructor was neither a string nor did it meet ' +
    'the isStylesheet type guard.',

  SOURCE_INVALID:
    'The source argument passed to the HtmlStyleSyntaxNode constructor ' +
    'was not a string.',
};

export abstract class HtmlStyleSyntaxNode extends AbstractHtmlElementSyntaxNode implements IHtmlStyleSyntaxNode {
  readonly subtype:  HtmlSyntaxNodeSubtypes.Style;
  readonly tagName:  'style' = 'style';
  readonly children: [ Stylesheet | string ];
  readonly source:   string;

  constructor(
    children:        [ Stylesheet | string ],
    source:          string,
    attributes:      THtmlAttributeSyntaxNodeMap = {},
    location:        ILocation | null = null)
  {
    super('style', children, attributes, location);

    if (!Array.isArray(children) || children.length !== 1) {
      throw new Error(strings.CHILDREN_INVALID);
    } else if (typeof children[0] !== 'string' && !isProgram(children[0])) {
      throw new Error(strings.CHILD_INVALID);
    } else if (arguments.length >= 4 && typeof source !== 'string') {
      throw new Error(strings.SOURCE_INVALID);
    }

    this.children = children;
    this.source   = source;
  }
}

export default HtmlStyleSyntaxNode;