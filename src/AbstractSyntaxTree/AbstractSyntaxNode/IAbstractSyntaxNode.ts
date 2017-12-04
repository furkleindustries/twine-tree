import {
  ILocation,
} from '../ILocation';

export interface IAbstractSyntaxNode {
  type:     string;
  subtype?: string;
  loc?:     ILocation;
}

export default IAbstractSyntaxNode;