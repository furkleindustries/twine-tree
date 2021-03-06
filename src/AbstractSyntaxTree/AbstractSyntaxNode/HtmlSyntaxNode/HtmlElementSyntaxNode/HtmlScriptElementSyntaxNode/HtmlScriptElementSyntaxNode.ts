import {
  AbstractHtmlElementSyntaxNode,
} from '../AbstractHtmlElementSyntaxNode';
import {
  HtmlElementSyntaxNodeSubtypes,
} from '../HtmlElementSyntaxNodeSubtypes';
import {
  IHtmlScriptElementSyntaxNode,
} from './IHtmlScriptElementSyntaxNode';
import {
  ISourceLocation,
} from '../../../../SourceLocation/ISourceLocation';
import {
  isProgram,
} from '../../../../isProgram';
import {
  Program,
} from 'esprima';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from '../../HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export const strings = {
  CHILDREN_INVALID:
    'The children argument passed to the HtmlScriptElementSyntaxNode ' +
    'constructor was not an array with a single member.',

  CHILD_INVALID:
    'The single member of the children argument passed to the ' +
    'HtmlScriptElementSyntaxNode constructor was neither a string nor did ' +
    'it meet the isProgram type guard.',

  SOURCE_INVALID:
    'The source argument passed to the HtmlScriptElementSyntaxNode ' +
    'constructor was not a string.',
};

export abstract class HtmlScriptElementSyntaxNode extends AbstractHtmlElementSyntaxNode implements IHtmlScriptElementSyntaxNode {
  readonly subtype:  HtmlElementSyntaxNodeSubtypes.Script;
  readonly tagName:  'script' = 'script';
  readonly children: [ Program | string ];
  readonly source:   string;

  constructor(
    children:        [ Program | string ],
    source:          string,
    attributes:      THtmlElementAttributeSyntaxNodeMap = {},
    location:        ISourceLocation | null = null)
  {
    super('script', children, attributes, location);

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

export default HtmlScriptElementSyntaxNode;