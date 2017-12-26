import {
  isLink,
} from '../isLink';
import {
  IDisplayLink,
} from './IDisplayLink';
import {
  LinkSubtypes,
} from '../LinkSubtypes';

export function isDisplayLink(maybe: any): maybe is IDisplayLink {
  return isLink(maybe) &&
    maybe.subtype === LinkSubtypes.Display;
}

export default isDisplayLink;