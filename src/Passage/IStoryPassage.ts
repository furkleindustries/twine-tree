import {
  IPassage,
} from './IPassage';
import {
  TTag,
} from '../Tag/TTag';
import {
  TAbstractSyntaxContent,
} from '../AbstractSyntaxTree/TAbstractSyntaxContent';

export interface IStoryPassage extends IPassage {
  abstractSyntaxTree: Array<TAbstractSyntaxContent>;
  tags: Array<TTag>;
}

export default IStoryPassage;