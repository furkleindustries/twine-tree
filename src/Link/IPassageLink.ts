import {
  ILink,
} from './ILink';
import {
  LinkTypes,
} from './LinkTypes';

export interface IPassageLink extends ILink {
  type: LinkTypes.Passage;
}

export default IPassageLink;