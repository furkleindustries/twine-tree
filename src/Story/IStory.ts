import {
  IFID,
} from 'ifid';
import {
  SemVer,
} from 'semver';

export interface IStory {
  name:           string;
  startNode:      number;
  creator:        string;
  creatorVersion: SemVer;
  ifid:           IFID;
  format:         string;
  options:        Object;
  hidden:         boolean;
}

export default IStory;