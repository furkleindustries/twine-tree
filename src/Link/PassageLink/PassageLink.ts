import {
  AbstractLink,
} from '../AbstractLink';
import {
  IPassageLink,
} from './IPassageLink';
import {
  IPassage,
} from '../../Passage/IPassage';
import {
  LinkSubtypes,
} from '../LinkSubtypes';
import {
  TRuntimeReference,
} from '../TRuntimeReference';

export class PassageLink extends AbstractLink implements IPassageLink {
  readonly subtype: LinkSubtypes.Passage;

  constructor(from: IPassage, to: IPassage | TRuntimeReference) {
    super(LinkSubtypes.Display, from, to);
  }
}

export default PassageLink;