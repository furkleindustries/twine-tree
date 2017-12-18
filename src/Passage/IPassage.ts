import {
  ILink,
} from '../Link/ILink';
import {
  TAbstractSyntaxTree,
} from '../AbstractSyntaxTree/TAbstractSyntaxTree';
import {
  TPassageType,
} from './TPassageType';

export interface IPassage {
  type:               TPassageType;
  pid:                number;
  name:               string;
  abstractSyntaxTree: TAbstractSyntaxTree;
  position?:          [ number, number ];
  links:              Array<ILink>;
}

export default IPassage;