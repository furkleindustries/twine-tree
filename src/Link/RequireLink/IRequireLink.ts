import {
  ILink,
} from '../ILink';
import {
  LinkSubtypes,
} from '../LinkSubtypes';

export interface IRequireLink extends ILink {
  subtype: LinkSubtypes.Require;
}

export default IRequireLink;