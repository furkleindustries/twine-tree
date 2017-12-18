import {
  isTagObject,
} from './isTagObject';
import {
  TTag,
} from './TTag';

export function isTag(maybe: any): maybe is TTag {
  if (!maybe) {
    return false;
  }
  
  
  return typeof maybe === 'string' || isTagObject(maybe);
}