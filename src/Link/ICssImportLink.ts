import {
  ILink,
} from './ILink';
import {
  LinkTypes,
} from './LinkTypes';

export interface ICssImportLink extends ILink {
  type: LinkTypes.CssImport;
}

export default ICssImportLink;