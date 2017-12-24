import {
  IKeyValueTag,
} from './IKeyValueTag';

export function isKeyValueTag(maybe: any): maybe is IKeyValueTag {
  return typeof maybe === 'object' &&
    maybe &&
    typeof maybe.key === 'string' &&
    maybe.key &&
    typeof maybe.value === 'string' &&
    maybe.value;
}

export default isKeyValueTag;