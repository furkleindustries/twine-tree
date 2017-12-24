import {
  getVersion,
} from '../modules/getVersion';
import {
  IIFID,
} from 'ifid';
import {
  IPassage,
} from '../Passage/IPassage';
import {
  isIFID,
} from 'ifid';
import {
  IStory,
} from './IStory';
import {
  SemVer,
} from 'semver';
import {
  TUnknownVersion,
} from './TUnknownVersion';
import {
  unknownVersion,
} from './unknownVersion';

export const strings = {
  UNKNOWN_CONSTRUCTION_ERROR:
    'An unknown error was encountered in the Story.isValid method ' +
    'while trying to construct a Story.',

  STORY_INVALID:
    'The story argument passed to Story.isValid was not an object.',

  NAME_INVALID:
    'The name argument to the Story constructor was not a string with ' +
    'content.',

  START_NODE_INVALID:
    'The startNode argument to the Story constructor was not a positive ' +
    'integer.',

  CREATOR_INVALID:
    'The creator argument to the Story constructor was not a string with ' +
    'content.',

  CREATOR_VERSION_INVALID:
    'The creatorVersion argument to the Story constructor was not a valid ' +
    'semantic version object.',

  IFID_INVALID:
    'The tags argument to the Story constructor was not an array.',

  FORMAT_INVALID:
    'The format argument passed to the Story constructor array was not a ' +
    'string with content.',

  OPTIONS_INVALID:
    'The options argument to the Story constructor was not an array.',

  OPTION_INVALID:
    'A member of the options argument passed to the Story constructor was ' +
    'not a string with content.',

  PASSAGES_INVALID:
    'The passages argument passed to the Story constructor was not an array.',
    
  PASSAGE_INVALID:
    'A member of the passages argument passed to the Story constructor was ' +
    'did not meet the isPassage type guard.',
};

export class Story implements IStory {
  name:             string;
  startNode:        number;
  creator:          string;
  creatorVersion:   SemVer | TUnknownVersion;
  ifid:             IIFID;
  format:           string;
  options:          Array<string>;
  passages:         Array<IPassage>;

  constructor(
    name:           string,
    startNode:      number,
    ifid:           IIFID,
    format:         string,
    options:        Array<string>,
    passages:       Array<IPassage>,
    creator:        string                   = 'twine-tree',
    creatorVersion: SemVer | TUnknownVersion = getVersion())
  {
    const story = {
      name,
      startNode,
      creator,
      creatorVersion,
      ifid,
      format,
      options,
      passages,
    };

    const isValid = Story.isValid(story);
    if (isValid instanceof Error) {
      throw isValid;
    } else if (isValid !== true) {
      throw new Error(strings.UNKNOWN_CONSTRUCTION_ERROR);
    }

    this.name           = name;
    this.startNode      = startNode;
    this.creator        = creator;
    this.creatorVersion = creatorVersion;
    this.ifid           = ifid;
    this.format         = format;
    this.options        = options;
    this.passages       = passages;
  }

  static isValid(story: any): true | Error {
    if (typeof story !== 'object' || !story) {
      return new Error(strings.STORY_INVALID);
    } else if (typeof story.name !== 'string' || !story.name) {
      return new Error(strings.NAME_INVALID);
    } else if (!(story.startNode >= 1 && story.startNode % 1 === 0)) {
      return new Error(strings.START_NODE_INVALID);
    } else if (typeof story.creator !== 'string' || !story.creator) {
      return new Error(strings.CREATOR_INVALID);
    } else if (!(story.creatorVersion instanceof SemVer) &&
      story.creatorVersion !== unknownVersion)
    {
      return new Error(strings.CREATOR_VERSION_INVALID);
    } else if (!isIFID(story.creatorVersion)) {

    }

    return true;
  }
}

export default Story;