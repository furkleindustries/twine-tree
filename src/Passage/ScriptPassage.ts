import {
  IJavascriptImportLink,
} from '../Link/JavascriptImportLink/IJavascriptImportLink';
import {
  IRequireLink,
} from '../Link/RequireLink/IRequireLink';
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
  IScriptPassage,
} from './IScriptPassage';
import {
  ITag,
} from '../Tag/ITag';
import {
  PassageSubtypes,
} from './PassageTypes';
import {
  Program,
} from 'esprima';
import {
  ScriptPassageDialects,
} from './ScriptPassageDialects';
import {
  TPosition,
} from '../Position/TPosition';
import {
  TSize,
} from '../Size/TSize';

export const strings = {
  UNKNOWN_CONSTRUCTION_ERROR:
    'An unknown error was encountered in the ScriptPassage.isValid method ' +
    'while trying to construct a ScriptPassage.',

  PASSAGE_INVALID:
    'The passage argument passed to ScriptPassage.isValid was not an object.',

  TYPE_INVALID:
    'The type argument passed to ScriptPassage.isValid was not "story".',

  SUBTYPE_INVALID:
    'The subtype argument passed to ScriptPassage.isValid was not a member ' +
    'of the PassageSubtypes enum.',

  PID_INVALID:
    'The pid argument to the ScriptPassage constructor was not a positive ' +
    'integer.',

  NAME_INVALID:
    'The name argument to the ScriptPassage constructor was not a string ' +
    'with content.',

  SOURCE_INVALID:
    'The source argument to the ScriptPassage consructor was not a string.',

  ABSTRACT_SYNTAX_TREE_INVALID:
    'The abstractSyntaxTree argument to the ScriptPassage constructor did ' +
    'not meet the isProgram type guard.',

  TAGS_INVALID:
    'The tags argument to the ScriptPassage constructor was not an array.',

  TAG_INVALID:
    'A member of the tags argument passed to the ScriptPassage constructor ' +
    'array was not an object or string with content.',

  POSITION_INVALID:
    'The position argument to the ScriptPassage constructor was not an ' +
    'array with two positive integers, or two -1 values, denoting no ' +
    'position.',

  SIZE_INVALID:
    'The size argument to the ScriptPassage constructor was not an array ' +
    'with two positive integers, or two -1 values, denoting no size.',

  LINKS_INVALID:
    'The links argument to the ScriptPassage constructor was not an array.',

  LINK_INVALID:
    'A member of the links argument passed to the ScriptPassage constructor ' +
    'array was not an object.',
};

export class ScriptPassage implements IScriptPassage {
  readonly type:               'passage';
  readonly subtype:            PassageSubtypes.Script;
  readonly dialect:            ScriptPassageDialects;
  readonly pid:                number;
  readonly name:               string;
  readonly abstractSyntaxTree: Program;
  readonly position:           TPosition;
  readonly size:               TSize;
  readonly tags:               Array<ITag>;
  readonly links:              Array<IJavascriptImportLink | IRequireLink>;
  readonly source:             string;

  constructor(
    pid:                       number,
    name:                      string,
    source:                    string,
    abstractSyntaxTree:        Program,
    tags:                      Array<ITag> = [],
    position:                  TPosition = [ -1, -1 ],
    size:                      TSize = [ -1, -1 ],
    links:                     Array<IJavascriptImportLink | IRequireLink> = [])
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

    const isValid = ScriptPassage.isValid(pass);
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
    } else if (typeof passage.abstractSyntaxTree !== 'object' ||
      !passage.abstractSyntaxTree)
    {
      return new Error(strings.ABSTRACT_SYNTAX_TREE_INVALID);
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

export default ScriptPassage;