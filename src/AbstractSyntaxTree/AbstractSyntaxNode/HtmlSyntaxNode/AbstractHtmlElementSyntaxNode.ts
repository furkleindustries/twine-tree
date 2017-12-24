import {
  AbstractAbstractSyntaxNode,
} from '../AbstractAbstractSyntaxNode';
import {
  AbstractSyntaxNodeTypes,
} from '../AbstractSyntaxNodeTypes';
import {
  HtmlSyntaxNodeSubtypes,
} from './HtmlSyntaxNodeSubtypes';
import {
  ILocation,
} from '../../ILocation';
import {
  TAbstractSyntaxContent,
} from '../../TAbstractSyntaxContent';
import {
  THtmlAttributeSyntaxNodeMap,
} from '../HtmlSyntaxNode/THtmlAttributeSyntaxNodeMap';
import {
  IHtmlElementSyntaxNode,
} from './IHtmlElementSyntaxNode';
import {
  Program,
} from 'esprima';
import {
  Stylesheet,
} from 'css';

export const strings = {
  TAG_NAME_INVALID:
    'The tagName argument passed to the AbstractHtmlElementSyntaxNode ' +
    'constructor was not a string with content.',

  CHILDREN_INVALID:
    'The children argument passed to the AbstractHtmlElementSyntaxNode ' +
    'constructor was not an array.',
};

export abstract class AbstractHtmlElementSyntaxNode extends AbstractAbstractSyntaxNode implements IHtmlElementSyntaxNode {
  readonly type:     AbstractSyntaxNodeTypes.HtmlElement = AbstractSyntaxNodeTypes.HtmlElement;
  readonly subtype:  HtmlSyntaxNodeSubtypes;
  readonly tagName:  string;
  readonly children: Array<TAbstractSyntaxContent> |
                     [ string | Program | Stylesheet ];

  constructor(
    tagName:         string,
    children:        Array<TAbstractSyntaxContent> |
                     [ string | Program | Stylesheet ],
    attributes:      THtmlAttributeSyntaxNodeMap = {},
    location:        ILocation | null = null)
  {
    super(attributes, location);

    if (typeof tagName !== 'string' || !tagName) {
      throw new Error(strings.TAG_NAME_INVALID);  
    } else if (!Array.isArray(children)) {
      throw new Error(strings.CHILDREN_INVALID);
    }

    this.tagName  = tagName;
    this.children = children;
  }
}

export default AbstractHtmlElementSyntaxNode;