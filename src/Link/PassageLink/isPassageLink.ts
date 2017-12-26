import {
  isLink,
} from '../isLink';
import {
  IPassageLink,
} from './IPassageLink';
import {
  LinkSubtypes,
} from '../LinkSubtypes';

export function isPassageLink(maybe: any): maybe is IPassageLink {
  return isLink(maybe) &&
    maybe.subtype === LinkSubtypes.Passage;
}

export default isPassageLink;