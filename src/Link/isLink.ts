import {
  ILink,
} from './ILink';
import {
  isPassage,
} from '../Passage/isPassage';
import {
  LinkTypes,
} from './LinkTypes';

export function isLink(maybe: any): maybe is ILink {
  return typeof maybe === 'object' &&
    maybe &&
    Object.values(LinkTypes).includes(maybe.type) &&
    isPassage(maybe.from) &&
    (isPassage(maybe.to) || maybe.to === 'tw-runtime-reference');
}

export default isLink;