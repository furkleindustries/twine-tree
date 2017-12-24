import {
  ITag,
} from './ITag';

export function isTag(maybe: any): maybe is ITag {
  return typeof maybe === 'object' &&
    maybe &&
    typeof maybe.value === 'string' &&
    maybe.value;
}