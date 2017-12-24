import {
  IPassage,
} from '../Passage/IPassage';
import {
  LinkTypes,
} from './LinkTypes';
import {
  TRunTimeReference,
} from './TRunTimeReference';

export interface ILink {
  type: LinkTypes;
  from: IPassage;
  to:   IPassage | TRunTimeReference;
}

export default ILink;