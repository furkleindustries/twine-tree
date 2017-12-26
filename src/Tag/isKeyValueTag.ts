import {
  IKeyValueTag,
} from './IKeyValueTag';
import {
  isTag,
} from './isTag';

export function isKeyValueTag(maybe: any): maybe is IKeyValueTag {
  return isTag(maybe) &&
    typeof (<any>maybe).key === 'string' &&
    (<any>maybe).key !== '';
}

export default isKeyValueTag;