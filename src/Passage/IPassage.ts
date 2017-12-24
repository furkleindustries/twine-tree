import {
  ILink,
} from '../Link/ILink';
import {
  ITag,
} from '../Tag/ITag';
import {
  TAbstractSyntaxTree,
} from '../AbstractSyntaxTree/TAbstractSyntaxTree';
import {
  PassageTypes,
} from './PassageTypes';
import {
  TPosition,
} from '../Position/TPosition';
import {
  TSize,
} from '../Size/TSize';

export interface IPassage {
  type:               PassageTypes;
  pid:                number;
  name:               string;
  abstractSyntaxTree: TAbstractSyntaxTree;
  position?:          TPosition;
  size?:              TSize;
  tags:               Array<ITag>;
  links:              Array<ILink>;
  source:             string;
}

export default IPassage;