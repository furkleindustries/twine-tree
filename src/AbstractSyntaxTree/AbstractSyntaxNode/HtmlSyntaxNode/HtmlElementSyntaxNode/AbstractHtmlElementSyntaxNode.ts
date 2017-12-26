import {
  AbstractAbstractSyntaxNode,
} from '../../AbstractAbstractSyntaxNode';
import {
  AbstractSyntaxNodeTypes,
} from '../../AbstractSyntaxNodeTypes';
import {
  HtmlElementSyntaxNodeSubtypes,
} from './HtmlElementSyntaxNodeSubtypes';
import {
  IHtmlElementSyntaxNode,
} from './IHtmlElementSyntaxNode';
import {
  ISourceLocation,
} from '../../../SourceLocation/ISourceLocation';
import {
  Program,
} from 'esprima';
import {
  Stylesheet,
} from 'css';
import {
  TAbstractSyntaxContent,
} from '../../../TAbstractSyntaxContent';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from '../HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

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
  readonly subtype:  HtmlElementSyntaxNodeSubtypes;
  readonly tagName:  string;
  readonly children: Array<TAbstractSyntaxContent> |
                     [ string | Program | Stylesheet ];

  constructor(
    tagName:         string,
    children:        Array<TAbstractSyntaxContent> |
                     [ string | Program | Stylesheet ],
    attributes:      THtmlElementAttributeSyntaxNodeMap = {},
    location:        ISourceLocation | null = null)
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