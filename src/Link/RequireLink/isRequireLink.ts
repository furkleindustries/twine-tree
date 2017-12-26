import {
  isLink,
} from '../isLink';
import {
  IRequireLink,
} from './IRequireLink';
import {
  LinkSubtypes,
} from '../LinkSubtypes';

export function isRequireLink(maybe: any): maybe is IRequireLink {
  return isLink(maybe) &&
    maybe.subtype === LinkSubtypes.Require;
}

export default isRequireLink;