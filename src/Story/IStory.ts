import {
  IIFID,
} from 'ifid/src/IFID/IIFID';
import {
  IPassage,
} from '../Passage/IPassage';
import {
  SemVer,
} from 'semver';

export interface IStory {
  name:           string;
  startNode:      number;
  creator:        string;
  creatorVersion: SemVer;
  ifid:           IIFID;
  format:         string;
  options:        Object;
  hidden:         boolean;
  passages:       Array<IPassage>;
}

export default IStory;