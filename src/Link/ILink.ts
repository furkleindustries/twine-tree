import {
  IPassage,
} from '../Passage/IPassage';
import {
  TLinkType,
} from './TLinkType';
import {
  TRunTimeReference,
} from './TRunTimeReference';

export interface ILink {
  type: TLinkType;
  from: IPassage;
  to:   IPassage | TRunTimeReference;
}

export default ILink;