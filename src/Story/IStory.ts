import {
  Dialects,
} from '../Dialect/Dialects';
import {
  IIFID,
} from 'ifid';
import {
  IPassage,
} from '../Passage/IPassage';
import {
  SemVer,
} from 'semver';
import {
  TUnknownVersion,
} from './TUnknownVersion';

export interface IStory {
  name:           string;
  startNode:      number;
  creator:        string;
  creatorVersion: SemVer | TUnknownVersion;
  ifid:           IIFID;
  format:         Dialects | string;
  options:        Array<string>;
  passages:       Array<IPassage>;
}

export default IStory;