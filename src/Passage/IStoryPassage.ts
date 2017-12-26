import {
  IPassage,
} from './IPassage';
import {
  PassageSubtypes,
} from './PassageTypes';
import {
  TAbstractSyntaxContent,
} from '../AbstractSyntaxTree/TAbstractSyntaxContent';

export interface IStoryPassage extends IPassage {
  readonly subtype:            PassageSubtypes.Story;
  readonly abstractSyntaxTree: Array<TAbstractSyntaxContent>;
}

export default IStoryPassage;