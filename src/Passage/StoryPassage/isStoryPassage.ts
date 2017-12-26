import {
  IStoryPassage,
} from './IStoryPassage';
import {
  isPassage,
} from '../isPassage';
import {
  PassageSubtypes,
} from '../PassageSubtypes';

export function isStoryPassage(maybe: any): maybe is IStoryPassage {
  return isPassage(maybe) &&
    maybe.subtype === PassageSubtypes.Story;
}

export default isStoryPassage;