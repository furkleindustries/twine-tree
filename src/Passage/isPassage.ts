import {
  IPassage,
} from './IPassage';

export function isPassage(maybe: any): maybe is IPassage {
  return typeof maybe === 'object' &&
    maybe &&
    maybe.type 
}

export default isPassage;