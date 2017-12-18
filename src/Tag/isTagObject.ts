import {
  ITag,
} from './ITag';

export function isTagObject(maybe: any): maybe is ITag {
  return typeof maybe === 'object' &&
    maybe &&
    typeof maybe.key === 'string' &&
    maybe.key &&
    typeof maybe.value === 'string' &&
    maybe.value;
}

export default isTagObject;