import {
  AbstractLink,
} from '../AbstractLink';
import {
  IRequireLink,
} from './IRequireLink';
import {
  IPassage,
} from '../../Passage/IPassage';
import {
  LinkSubtypes,
} from '../LinkSubtypes';
import {
  TRuntimeReference,
} from '../TRuntimeReference';

export class RequireLink extends AbstractLink implements IRequireLink {
  readonly subtype: LinkSubtypes.Require;

  constructor(from: IPassage, to: IPassage | TRuntimeReference) {
    super(LinkSubtypes.Display, from, to);
  }
}

export default RequireLink;