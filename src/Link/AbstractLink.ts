import {
  ILink,
} from './ILink';
import {
  IPassage,
} from '../Passage/IPassage';
import {
  isPassage,
} from '../Passage/isPassage';
import {
  isRuntimeReference,
} from './isRuntimeReference';
import {
  LinkSubtypes,
} from './LinkSubtypes';
import {
  TRuntimeReference,
} from './TRuntimeReference';

export const strings = {
  SUBTYPE_INVALID:
    'The subtype argument passed to the AbstractLink constructor was not a ' +
    'member of the LinkSubtypes enum.',

  FROM_INVALID:
    'The from argument passed to the AbstractLink constructor did not meet ' +
    'the isPassage type guard.',

  TO_INVALID:
    'The to argument passed to the AbstractLink constructor met neither the ' +
    'isRuntimeReference nor the isPassage type guards.',
};

export abstract class AbstractLink implements ILink {
  readonly type:    'link' = 'link';
  readonly subtype: LinkSubtypes;
  readonly from:    IPassage;
  readonly to:      IPassage | TRuntimeReference;

  constructor(
    subtype:        LinkSubtypes,
    from:           IPassage,
    to:             IPassage | TRuntimeReference)
  {
    if (!Object.values(LinkSubtypes).includes(subtype)) {
      throw new Error(strings.SUBTYPE_INVALID);
    } else if (!isPassage(from)) {
      throw new Error(strings.FROM_INVALID);
    } else if (!isRuntimeReference(to) && !isPassage(to)) {
      throw new Error(strings.TO_INVALID);
    }
  }
}

export default AbstractLink;