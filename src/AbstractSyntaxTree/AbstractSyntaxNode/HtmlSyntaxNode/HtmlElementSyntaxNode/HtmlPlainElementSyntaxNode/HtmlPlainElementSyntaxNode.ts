import {
  AbstractHtmlElementSyntaxNode,
} from '../AbstractHtmlElementSyntaxNode';
import {
  HtmlElementSyntaxNodeSubtypes,
} from '../HtmlElementSyntaxNodeSubtypes';
import {
  IHtmlPlainElementSyntaxNode,
} from './IHtmlPlainElementSyntaxNode';
import {
  isAbstractSyntaxContent,
} from '../../../../isAbstractSyntaxContent';
import {
  ISourceLocation,
} from '../../../../SourceLocation/ISourceLocation';
import {
  TAbstractSyntaxContent,
} from '../../../../TAbstractSyntaxContent';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from '../../HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export const strings = {
  CHILD_INVALID:
    'The single member of the children argument passed to the ' +
    'HtmlPlainElementSyntaxNode constructor was neither a string nor did it meet ' +
    'the isProgram type guard.',
};

export abstract class HtmlPlainElementSyntaxNode extends AbstractHtmlElementSyntaxNode implements IHtmlPlainElementSyntaxNode {
  readonly subtype:  HtmlElementSyntaxNodeSubtypes.Plain;
  readonly tagName:  string;
  readonly children: Array<TAbstractSyntaxContent>;

  constructor(
    tagName:         string,
    children:        Array<TAbstractSyntaxContent> = [],
    attributes:      THtmlElementAttributeSyntaxNodeMap = {},
    location:        ISourceLocation | null = null)
  {
    super(tagName, children, attributes, location);

    const filtered = children.filter((aa) => isAbstractSyntaxContent(aa));
    if (filtered.length !== children.length) {
      throw new Error(strings.CHILD_INVALID);
    }
  }
}

export default HtmlPlainElementSyntaxNode;