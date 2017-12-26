import {
  IPassage,
} from '../Passage/IPassage';
import {
  LinkSubtypes,
} from './LinkSubtypes';
import {
  TRuntimeReference,
} from './TRuntimeReference';

export interface ILink {
  type:    'link';
  subtype: LinkSubtypes;
  from:    IPassage;
  to:      IPassage | TRuntimeReference;
}

export default ILink;