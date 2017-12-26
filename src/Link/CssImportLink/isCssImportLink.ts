import {
  ICssImportLink,
} from './ICssImportLink';
import {
  isLink,
} from '../isLink';
import {
  LinkSubtypes,
} from '../LinkSubtypes';

export function isCssImportLink(maybe: any): maybe is ICssImportLink {
  return isLink(maybe) &&
    maybe.subtype === LinkSubtypes.CssImport;
}

export default isCssImportLink;