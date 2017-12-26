import {
  IJavascriptImportLink,
} from './IJavascriptImportLink';
import {
  isLink,
} from '../isLink';
import {
  LinkSubtypes,
} from '../LinkSubtypes';

export function isJavascriptImportLink(maybe: any): maybe is IJavascriptImportLink {
  return isLink(maybe) &&
    maybe.subtype === LinkSubtypes.JavascriptImport &&
    typeof (<any>maybe).property === 'string' &&
    (<any>maybe).property !== '';
}

export default isJavascriptImportLink;