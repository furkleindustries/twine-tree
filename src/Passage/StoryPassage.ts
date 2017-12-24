import {
  ILink,
} from '../Link/ILink';
import {
  isLink,
} from '../Link/isLink';
import {
  isPosition,
} from '../Position/isPosition';
import {
  isTag,
} from '../Tag/isTag';
import {
  IStoryPassage,
} from './IStoryPassage';
import {
  ITag,
} from '../Tag/ITag';
import {
  PassageTypes,
} from './PassageTypes';
import {
  TAbstractSyntaxContent,
} from '../AbstractSyntaxTree/TAbstractSyntaxContent';

export const strings = {
  UNKNOWN_CONSTRUCTION_ERROR:
    'An unknown error was encountered in the StoryPassage.isValid method ' +
    'while trying to construct a StoryPassage.',

  PASSAGE_INVALID:
    'The passage argument passed to StoryPassage.isValid was not an object.',

  PID_INVALID:
    'The pid argument to the StoryPassage constructor was not a positive ' +
    'integer.',

  NAME_INVALID:
    'The name argument to the StoryPassage constructor was not a string ' +
    'with content.',

  SOURCE_INVALID:
    'The source argument to the StoryPassage consructor was not a string.',

  ABSTRACT_SYNTAX_TREE_INVALID:
    'The abstractSyntaxTree argument to the StoryPassage constructor was ' +
    'not an object',

  TAGS_INVALID:
    'The tags argument to the StoryPassage constructor was not an array.',

  TAG_INVALID:
    'A member of the tags argument passed to the StoryPassage constructor ' +
    'array was not an object or string with content.',

  POSITION_INVALID:
    'The position argument to the StoryPassage constructor was not an array ' +
    'with two positive integers, or two -1 values, denoting no position.',

  LINKS_INVALID:
    'The links argument to the StoryPassage constructor was not an array.',

  LINK_INVALID:
    'A member of the links argument passed to the StoryPassage constructor ' +
    'array was not an object.',
};

export class StoryPassage implements IStoryPassage {
  readonly type:      PassageTypes.Story;
  readonly pid:       number;
  name:               string;
  source:             string;
  abstractSyntaxTree: Array<TAbstractSyntaxContent>;
  tags:               Array<ITag>;
  position:           [ number, number ];
  links:              Array<ILink>;

  constructor(
    pid:                number,
    name:               string,
    source:             string,
    abstractSyntaxTree: Array<TAbstractSyntaxContent>,
    tags:               Array<ITag>        = [],
    position:           [ number, number ] = [ -1, -1 ],
    links:              Array<ILink>       = [])
  {
    const pass = {
      type: 'story',
      pid,
      name,
      source,
      abstractSyntaxTree,
      tags,
      position,
      links,
    };

    const isValid = StoryPassage.isValid(pass);
    if (isValid instanceof Error) {
      throw isValid;
    } else if (isValid !== true) {
      throw new Error(strings.UNKNOWN_CONSTRUCTION_ERROR);
    }

    this.pid                = pid;
    this.name               = name;
    this.source             = source;
    this.abstractSyntaxTree = abstractSyntaxTree;
    this.tags               = tags;
    this.position           = position;
    this.links              = links;
  }

  static isValid(passage: any): true | Error {
    if (typeof passage !== 'object' || !passage) {
      return new Error(strings.PASSAGE_INVALID);
    } else if (!(passage.pid > 0 && passage.pid % 1 === 0)) {
      return new Error(strings.PID_INVALID);
    } else if (typeof passage.abstractSyntaxTree !== 'object' ||
      !passage.abstractSyntaxTree)
    {
      return new Error(strings.ABSTRACT_SYNTAX_TREE_INVALID);
    } else if (!Array.isArray(passage.tags)) {
      return new Error(strings.TAGS_INVALID);
    } else if (passage.tags.filter((aa: ITag) => {
      return isTag(aa);
    }).length !== passage.tags.length)
    {
      return new Error(strings.TAG_INVALID);
    } else if (!isPosition(passage.position)) {
      return new Error(strings.POSITION_INVALID);
    } else if (!Array.isArray(passage.links)) {
      throw new Error(strings.LINKS_INVALID);
    } else if (passage.links.filter((aa: ILink) => {
      return isLink(aa);
    }).length !== passage.links.length)
    {
      throw new Error(strings.LINK_INVALID);
    }

    return true;
  }
}

export default StoryPassage;