import {
  isNonNullSize,
} from './isNonNullSize';
import {
  isNullSize,
} from './isNullSize';
import {
  TSize,
} from './TSize';

export function isSize(maybe: any): maybe is TSize {
  return isNonNullSize(maybe) || isNullSize(maybe);
}

export default isSize;