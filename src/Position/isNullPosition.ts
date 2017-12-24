import {
  TNullPosition,
} from './TNullPosition';

export function isNullPosition(maybe: any): maybe is TNullPosition {
  return typeof maybe === 'object' &&
    maybe &&
    maybe.length === 2 &&
    typeof maybe.filter === 'function' &&
    maybe.filter((aa: number) => aa === -1).length === 2;
}

export default isNullPosition;