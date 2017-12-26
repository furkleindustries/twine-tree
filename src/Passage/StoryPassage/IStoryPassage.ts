import {
  IPassage,
} from '../IPassage';
import {
  PassageSubtypes,
} from '../PassageSubtypes';

export interface IStoryPassage extends IPassage {
  readonly subtype: PassageSubtypes.Story;
}

export default IStoryPassage;