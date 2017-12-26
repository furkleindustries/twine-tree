import {
  TRuntimeReference,
} from './TRuntimeReference';

export function isRuntimeReference(maybe: any): maybe is TRuntimeReference {
  return maybe === 'tw-runtime-reference';
}

export default isRuntimeReference;