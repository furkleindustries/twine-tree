import {
  AbstractLink,
} from '../AbstractLink';
import {
  ICssImportLink,
} from './ICssImportLink';
import {
  IPassage,
} from '../../Passage/IPassage';
import {
  LinkSubtypes,
} from '../LinkSubtypes';
import {
  TRuntimeReference,
} from '../TRuntimeReference';

export class CssImportLink extends AbstractLink implements ICssImportLink {
  readonly subtype: LinkSubtypes.CssImport;

  constructor(from: IPassage, to: IPassage | TRuntimeReference) {
    super(LinkSubtypes.CssImport, from, to);
  }
}

export default CssImportLink;