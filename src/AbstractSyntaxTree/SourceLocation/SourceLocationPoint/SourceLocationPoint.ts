import {
  ISourceLocationPoint,
} from './ISourceLocationPoint';

const validateNumber = (maybe: any): boolean => {
  return typeof maybe === 'number' &&
    maybe >= 0 &&
    maybe % 1 === 0;
};

export const strings = {
  OFFSET_INVALID:
    'The offset argument passed to the SourceLocationPoint constructor was ' +
    'not an integer greater than or equal to 0.',

  LINE_INVALID:
    'The line argument passed to the SourceLocationPoint constructor was ' +
    'not an integer greater than or equal to 0.',

  COLUMN_INVALID:
    'The column argument passed to the SourceLocationPoint constructor was ' +
    'not an integer greater than or equal to 0.',
};

export class SourceLocationPoint implements ISourceLocationPoint {
  readonly offset: number;
  readonly line:   number;
  readonly column: number;

  constructor(offset: number, line: number, column: number) {
    if (!validateNumber(offset)) {
      throw new Error(strings.OFFSET_INVALID);
    } else if (!validateNumber(line)) {
      throw new Error(strings.LINE_INVALID);
    } else if (!validateNumber(column)) {
      throw new Error(strings.COLUMN_INVALID);
    }

    this.offset = offset;
    this.line   = line;
    this.column = column;
  }
}

export default SourceLocationPoint;