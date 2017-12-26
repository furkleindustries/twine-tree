import {
  AbstractLink,
} from '../AbstractLink';
import {
  IJavascriptImportLink,
} from './IJavascriptImportLink';
import {
  IPassage,
} from '../../Passage/IPassage';
import {
  LinkSubtypes,
} from '../LinkSubtypes';
import {
  TRuntimeReference,
} from '../TRuntimeReference';

export const strings = {
  PROPERTY_INVALID:
    'The property argument passed to the JavascriptImportLink constructor ' +
    'was not a string with content.',
};

export class JavascriptImportLink extends AbstractLink implements IJavascriptImportLink {
  readonly subtype:  LinkSubtypes.JavascriptImport;
  readonly property: string;

  constructor(
    from: IPassage,
    to: IPassage | TRuntimeReference,
    property: string)
  {
    super(LinkSubtypes.Display, from, to);

    if (typeof property !== 'string' || !property) {
      throw new Error(strings.PROPERTY_INVALID);
    }

    this.property = property;
  }
}

export default JavascriptImportLink;