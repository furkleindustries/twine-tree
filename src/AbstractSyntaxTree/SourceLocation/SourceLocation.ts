import {
  ISourceLocation,
} from './ISourceLocation';
import {
  ISourceLocationPoint,
} from './SourceLocationPoint/ISourceLocationPoint';
import {
  isSourceLocationPoint,
} from './SourceLocationPoint/isSourceLocationPoint';

export const strings = {
  START_INVALID:
    'The start argument passed to the SourceLocation constructor did not ' +
    'meet the isSourceLocation type guard.',

  END_INVALID:
    'The end argument passed to the SourceLocation constructor did not meet ' +
    'the isSourceLocation type guard.',
};

export class SourceLocation implements ISourceLocation {
  readonly start: ISourceLocationPoint;
  readonly end:   ISourceLocationPoint;

  constructor(start: ISourceLocationPoint, end: ISourceLocationPoint) {
    if (!isSourceLocationPoint(start)) {
      throw new Error(strings.START_INVALID);
    } else if (!isSourceLocationPoint(end)) {
      throw new Error(strings.END_INVALID);
    }

    this.start = start;
    this.end   = end;
  }
}

export default SourceLocation;