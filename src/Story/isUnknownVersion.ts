import {
  TUnknownVersion,
} from './TUnknownVersion';

export function isUnknownVersion(maybe: any): maybe is TUnknownVersion {
  return maybe === 'tw-unknown-version';
}

export default isUnknownVersion;