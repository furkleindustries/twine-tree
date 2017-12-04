import {
  ILocation,
} from '../ILocation';

export interface IAbstractSyntaxNode {
  type:        string;
  subtype?:    string;
  attributes?: Object;
  location?:   ILocation;
}

export default IAbstractSyntaxNode;