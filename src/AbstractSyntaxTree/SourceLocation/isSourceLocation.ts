import {
  ISourceLocation,
} from './ISourceLocation';
import {
  isSourceLocationPoint,
} from './SourceLocationPoint/isSourceLocationPoint';

export function isSourceLocation(maybe: any): maybe is ISourceLocation {
  return typeof maybe === 'object' &&
    maybe &&
    isSourceLocationPoint(maybe.start) &&
    isSourceLocationPoint(maybe.end) &&
    maybe.start.line <= maybe.end.line;
}

export default isSourceLocation;