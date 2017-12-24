import {
  IPassage,
} from './IPassage';
import {
  Program,
} from 'estree';
import {
  PassageTypes,
} from './PassageTypes';
import {
  ScriptPassageSubtypes,
} from './ScriptPassageSubtypes';

export interface IScriptPassage extends IPassage {
  type:               PassageTypes.Script;
  subtype:            ScriptPassageSubtypes;
  abstractSyntaxTree: Program;
}

export default IScriptPassage;