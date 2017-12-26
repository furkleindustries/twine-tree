import {
  ILink,
} from '../ILink';
import {
  LinkSubtypes,
} from '../LinkSubtypes';

export interface IJavascriptImportLink extends ILink {
  subtype:  LinkSubtypes.JavascriptImport;
  property: string;
}

export default IJavascriptImportLink;