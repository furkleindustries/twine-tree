import {
  AbstractSyntaxNodeSubtypes,
} from './AbstractSyntaxNodeSubtypes';
import {
  AbstractSyntaxNodeTypes,
} from './AbstractSyntaxNodeTypes';
import {
  IAbstractSyntaxNode,
} from './IAbstractSyntaxNode';
import {
  ISourceLocation,
} from '../SourceLocation/ISourceLocation';
import {
  isHtmlAttributeSyntaxNodeMap,
} from './HtmlSyntaxNode/HtmlElementAttributeSyntaxNode/isHtmlAttributeSyntaxNodeMap';
import {
  isSourceLocation,
} from '../SourceLocation/isSourceLocation';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from './HtmlSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export const strings = {
  ATTRIBUTES_INVALID:
    'The attributes argument passed to the ArgumentSyntaxNode constructor ' +
    'did not meet the isHtmlAttributeSyntaxNodeMap type guard.',

  LOCATION_INVALID:
    'The optional location argument did not meet the isLocation type guard.',
}

export abstract class AbstractAbstractSyntaxNode implements IAbstractSyntaxNode {
  readonly type:       AbstractSyntaxNodeTypes;
  readonly subtype:    AbstractSyntaxNodeSubtypes;
  readonly attributes: THtmlElementAttributeSyntaxNodeMap;
  readonly location:   ISourceLocation | null;

  constructor(
    attributes:        THtmlElementAttributeSyntaxNodeMap = {},
    location:          ISourceLocation | null = null)
  {
    if (!isHtmlAttributeSyntaxNodeMap(attributes)) {
      throw new Error(strings.ATTRIBUTES_INVALID);
    } else if (arguments.length >= 2 &&
      location !== null &&
      !isSourceLocation(location))
    {
      throw new Error(strings.LOCATION_INVALID);
    }

    this.attributes = attributes;
    this.location   = location;
  }
}