import {
  ILocationPoint,
} from './ILocationPoint';

export function isLocationPoint(maybe: any): maybe is ILocationPoint {
  return typeof maybe === 'object' &&
    maybe &&
    typeof maybe.offset === 'number' &&
    maybe.offset >= 0 &&
    maybe.offset % 1 === 0 &&
    typeof maybe.line === 'number' &&
    maybe.line >= 0 &&
    maybe.line % 1 === 0;
}

export default isLocationPoint;