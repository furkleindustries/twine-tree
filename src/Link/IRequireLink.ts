import {
  ILink,
} from './ILink';

export interface IRequireLink extends ILink {
  type: 'require';
}

export default IRequireLink;