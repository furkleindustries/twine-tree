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
  ILocation,
} from '../ILocation';
import {
  isHtmlAttributeSyntaxNodeMap,
} from './HtmlElementSyntaxNode/HtmlElementAttributeSyntaxNode/isHtmlAttributeSyntaxNodeMap';
import {
  isLocation,
} from '../isLocation';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from './HtmlElementSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export const strings = {
  ATTRIBUTES_INVALID:
    'The attributes argument passed to the ArgumentSyntaxNode constructor ' +
    'did not meet the isHtmlAttributeSyntaxNodeMap type guard.',

  LOCATION_INVALID:
    'The optional location argument did not meet the isLocation type guard.',
}

export abstract class AbstractAbstractSyntaxNode implements IAbstractSyntaxNode {
  readonly type:       AbstractSyntaxNodeTypes;
  readonly subtype?:   AbstractSyntaxNodeSubtypes;
  readonly attributes: THtmlElementAttributeSyntaxNodeMap;
  readonly location:   ILocation | null;

  constructor(
    attributes:        THtmlElementAttributeSyntaxNodeMap = {},
    location:          ILocation | null = null)
  {
    if (!isHtmlAttributeSyntaxNodeMap(attributes)) {
      throw new Error(strings.ATTRIBUTES_INVALID);
    } else if (arguments.length >= 2 &&
      location !== null &&
      !isLocation(location))
    {
      throw new Error(strings.LOCATION_INVALID);
    }

    this.attributes = attributes;
    this.location   = location;
  }
}