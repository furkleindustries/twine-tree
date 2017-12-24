import {
  IPassage,
} from './IPassage';
import {
  PassageTypes,
} from './PassageTypes';
import {
  TAbstractSyntaxContent,
} from '../AbstractSyntaxTree/TAbstractSyntaxContent';

export interface IStoryPassage extends IPassage {
  type:               PassageTypes.Story;
  abstractSyntaxTree: Array<TAbstractSyntaxContent>;
}

export default IStoryPassage;