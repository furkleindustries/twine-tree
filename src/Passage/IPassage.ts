import {
  TAbstractSyntaxTree,
} from '../AbstractSyntaxTree/TAbstractSyntaxTree';

export interface IPassage {
  pid:                number;
  name:               string;
  abstractSyntaxTree: TAbstractSyntaxTree;
  tags:               Array<string>;
  position:           Array<number>;
}

export default IPassage;