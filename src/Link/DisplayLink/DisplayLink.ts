import {
  AbstractLink,
} from '../AbstractLink';
import {
  IDisplayLink,
} from './IDisplayLink';
import {
  IPassage,
} from '../../Passage/IPassage';
import {
  LinkSubtypes,
} from '../LinkSubtypes';
import {
  TRuntimeReference,
} from '../TRuntimeReference';

export class DisplayLink extends AbstractLink implements IDisplayLink {
  readonly subtype: LinkSubtypes.Display;

  constructor(from: IPassage, to: IPassage | TRuntimeReference) {
    super(LinkSubtypes.Display, from, to);
  }
}

export default DisplayLink;