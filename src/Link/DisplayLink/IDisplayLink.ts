import {
  ILink,
} from '../ILink';
import {
  LinkSubtypes,
} from '../LinkSubtypes';

export interface IDisplayLink extends ILink {
  subtype: LinkSubtypes.Display;
}

export default IDisplayLink;