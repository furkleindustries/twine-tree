import {
  ILink,
} from "./ILink";

export interface ICssImportLink extends ILink {
  type: 'cssImport';
}

export default ICssImportLink;