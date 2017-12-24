import {
  ILink,
} from './ILink';
import {
  LinkTypes,
} from './LinkTypes';

export interface IRequireLink extends ILink {
  type: LinkTypes.Require;
}

export default IRequireLink;