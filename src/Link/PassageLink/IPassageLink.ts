import {
  ILink,
} from '../ILink';
import {
  LinkSubtypes,
} from '../LinkSubtypes';

export interface IPassageLink extends ILink {
  subtype: LinkSubtypes.Passage;
}

export default IPassageLink;