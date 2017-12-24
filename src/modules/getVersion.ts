import {
  SemVer,
} from 'semver';
import {
  TUnknownVersion,
} from '../Story/TUnknownVersion';
import {
  unknownVersion,
} from '../Story/unknownVersion';

let version: SemVer;
export function getVersion(): SemVer | TUnknownVersion {
  if (version) {
    return version;
  }

  try {
    const v = require('../../package.json').version;
    version = new SemVer(v);
    return version;
  } catch (e) {
    return unknownVersion;
  }
}

export default getVersion;