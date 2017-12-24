import {
  ILocation,
} from './ILocation';
import {
  isLocationPoint,
} from './isLocationPoint';

export function isLocation(maybe: any): maybe is ILocation {
  return typeof maybe === 'object' &&
    maybe &&
    isLocationPoint(maybe.start) &&
    isLocationPoint(maybe.end) &&
    maybe.start.line <= maybe.end.line;
}

export default isLocation;