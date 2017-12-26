import {
  ITag,
} from './ITag';
import {
  TagSubtypes,
} from './TagSubtypes';

export function isTag(maybe: any): maybe is ITag {
  return typeof maybe === 'object' &&
    maybe &&
    typeof maybe.type === 'string' &&
    maybe.type === 'tag',
    Object.values(TagSubtypes).includes(maybe.subtype) &&
    typeof maybe.value === 'string' &&
    maybe.value;
}