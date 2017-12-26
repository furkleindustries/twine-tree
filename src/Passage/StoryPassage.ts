import {
  ILink,
} from '../Link/ILink';
import {
  isAbstractSyntaxContent,
} from '../AbstractSyntaxTree/isAbstractSyntaxContent';
import {
  isLink,
} from '../Link/isLink';
import {
  isPosition,
} from '../Position/isPosition';
import {
  isSize,
} from '../Size/isSize';
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
  PassageSubtypes,
} from './PassageTypes';
import {
  TAbstractSyntaxContent,
} from '../AbstractSyntaxTree/TAbstractSyntaxContent';
import {
  TPosition,
} from '../Position/TPosition';
import {
  TSize,
} from '../Size/TSize';

export const strings = {
  UNKNOWN_CONSTRUCTION_ERROR:
    'An unknown error was encountered in the StoryPassage.isValid method ' +
    'while trying to construct a StoryPassage.',

  PASSAGE_INVALID:
    'The passage argument passed to StoryPassage.isValid was not an object.',

  TYPE_INVALID:
    'The type argument passed to StoryPassage.isValid was not "story".',

  SUBTYPE_INVALID:
    'The subtype argument passed to StoryPassage.isValid was not a member ' +
    'of the PassageSubtypes enum.',

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
    'not an array.',

  ABSTRACT_SYNTAX_CONTENT_INVALID:
    'A member of the abstractSyntaxTree argument did not meet the ' +
    'isAbstractSyntaxContent type guard.',

  TAGS_INVALID:
    'The tags argument to the StoryPassage constructor was not an array.',

  TAG_INVALID:
    'A member of the tags argument passed to the StoryPassage constructor ' +
    'array was not an object or string with content.',

  POSITION_INVALID:
    'The position argument to the StoryPassage constructor was not an array ' +
    'with two positive integers, or two -1 values, denoting no position.',

  SIZE_INVALID:
    'The size argument to the StoryPassage constructor was not an array ' +
    'with two positive integers, or two -1 values, denoting no size.',

  LINKS_INVALID:
    'The links argument to the StoryPassage constructor was not an array.',

  LINK_INVALID:
    'A member of the links argument passed to the StoryPassage constructor ' +
    'array did not meet the isLink type guard.',
};

export class StoryPassage implements IStoryPassage {
  readonly type:               'passage' = 'passage';
  readonly subtype:            PassageSubtypes.Story = PassageSubtypes.Story;
  readonly pid:                number;
  readonly name:               string;
  readonly abstractSyntaxTree: Array<TAbstractSyntaxContent>;
  readonly position:           TPosition;
  readonly size:               TSize;
  readonly tags:               Array<ITag>;
  readonly links:              Array<ILink>;
  readonly source:             string;

  constructor(
    pid:                number,
    name:               string,
    source:             string,
    abstractSyntaxTree: Array<TAbstractSyntaxContent>,
    tags:               Array<ITag>  = [],
    position:           TPosition    = [ -1, -1 ],
    size:               TSize        = [ -1, -1 ],
    links:              Array<ILink> = [])
  {
    const pass = {
      type: this.type,
      subtype: this.subtype,
      pid,
      name,
      source,
      abstractSyntaxTree,
      tags,
      position,
      size,
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
    this.size               = size;
    this.links              = links;
  }

  static isValid(passage: any): true | Error {
    if (typeof passage !== 'object' || !passage) {
      return new Error(strings.PASSAGE_INVALID);
    } else if (passage.type !== 'passage') {
      return new Error(strings.TYPE_INVALID);
    } else if (passage.subtype !== PassageSubtypes.Story) {
      return new Error(strings.SUBTYPE_INVALID);
    } else if (!(passage.pid > 0 && passage.pid % 1 === 0)) {
      return new Error(strings.PID_INVALID);
    } else if (!Array.isArray(passage.abstractSyntaxTree)) {
      return new Error(strings.ABSTRACT_SYNTAX_TREE_INVALID);
    } else if (passage.abstractSyntaxTree.filter((aa: any) => {
      return isAbstractSyntaxContent(aa);
    }).length !== passage.abstractSyntaxTree.length)
    {
      return new Error(strings.ABSTRACT_SYNTAX_CONTENT_INVALID);
    } else if (!Array.isArray(passage.tags)) {
      return new Error(strings.TAGS_INVALID);
    } else if (passage.tags.filter((aa: any) => {
      return isTag(aa);
    }).length !== passage.tags.length)
    {
      return new Error(strings.TAG_INVALID);
    } else if (!isPosition(passage.position)) {
      return new Error(strings.POSITION_INVALID);
    } else if (!isSize(passage.size)) {
      return new Error(strings.SIZE_INVALID);
    } else if (!Array.isArray(passage.links)) {
      return new Error(strings.LINKS_INVALID);
    } else if (passage.links.filter((aa: any) => {
      return isLink(aa);
    }).length !== passage.links.length)
    {
      return new Error(strings.LINK_INVALID);
    }

    return true;
  }
}

export default StoryPassage;