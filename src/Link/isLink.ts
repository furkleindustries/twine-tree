import {
  ILink,
} from './ILink';
import {
  isPassage,
} from '../Passage/isPassage';
import {
  isRuntimeReference,
} from './isRuntimeReference';
import {
  LinkSubtypes,
} from './LinkSubtypes';

export function isLink(maybe: any): maybe is ILink {
  return typeof maybe === 'object' &&
    maybe &&
    maybe.type === 'link' &&
    Object.values(LinkSubtypes).includes(maybe.subtype) &&
    isPassage(maybe.from) &&
    (isRuntimeReference(maybe.to) || isPassage(maybe.to));
}

export default isLink;