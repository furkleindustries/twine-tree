import {
  ISourceLocationPoint,
} from './ISourceLocationPoint';

export function isSourceLocationPoint(maybe: any): maybe is ISourceLocationPoint {
  return typeof maybe === 'object' &&
    maybe &&
    typeof maybe.offset === 'number' &&
    maybe.offset >= 0 &&
    maybe.offset % 1 === 0 &&
    typeof maybe.line === 'number' &&
    maybe.line >= 0 &&
    maybe.line % 1 === 0;
}

export default isSourceLocationPoint;