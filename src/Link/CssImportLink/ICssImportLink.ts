import {
  ILink,
} from '../ILink';
import {
  LinkSubtypes,
} from '../LinkSubtypes';

export interface ICssImportLink extends ILink {
  subtype: LinkSubtypes.CssImport;
}

export default ICssImportLink;