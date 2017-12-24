import {
  isNonNullPosition,
} from './isNonNullPosition';
import {
  isNullPosition,
} from './isNullPosition';
import {
  TPosition,
} from './TPosition';

export function isPosition(maybe: any): maybe is TPosition {
  return isNonNullPosition(maybe) || isNullPosition(maybe);
}

export default isPosition;