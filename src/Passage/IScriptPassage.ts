import {
  IPassage,
} from './IPassage';
import {
  Program,
} from 'estree';
import {
  PassageSubtypes,
} from './PassageTypes';
import {
  ScriptPassageDialects,
} from './ScriptPassageDialects';
import {
  IJavascriptImportLink,
} from '../Link/JavascriptImportLink/IJavascriptImportLink';
import {
  IRequireLink,
} from '../Link/RequireLink/IRequireLink';

export interface IScriptPassage extends IPassage {
  readonly subtype:            PassageSubtypes.Script;
  readonly dialect:            ScriptPassageDialects;
  readonly abstractSyntaxTree: Program;
  readonly links:              Array<IJavascriptImportLink | IRequireLink>;
}

export default IScriptPassage;