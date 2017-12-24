import {
  ILink,
} from './ILink';
import {
  LinkTypes,
} from './LinkTypes';

export interface IPassageDisplayLink extends ILink {
  type: LinkTypes.Display;
}

export default IPassageDisplayLink;