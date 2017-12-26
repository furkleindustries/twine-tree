import {
  ISourceLocationPoint,
} from './SourceLocationPoint/ISourceLocationPoint';

export interface ISourceLocation {
  readonly start: ISourceLocationPoint;
  readonly end:   ISourceLocationPoint;
}

export default ISourceLocation;