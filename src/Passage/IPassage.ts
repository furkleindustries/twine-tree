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
  PassageSubtypes,
} from './PassageSubtypes';
import {
  TPosition,
} from '../Position/TPosition';
import {
  TSize,
} from '../Size/TSize';

export interface IPassage {
  readonly type:               'passage';
  readonly subtype:            PassageSubtypes;
  readonly pid:                number;
  readonly name:               string;
  readonly abstractSyntaxTree: TAbstractSyntaxTree;
  readonly position:           TPosition;
  readonly size:               TSize;
  readonly tags:               Array<ITag>;
  readonly links:              Array<ILink>;
  readonly source:             string;
}

export default IPassage;