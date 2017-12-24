import {
  TNullSize,
} from './TNullSize';

export function isNullSize(maybe: any): maybe is TNullSize {
  return typeof maybe === 'object' &&
    maybe &&
    maybe.length === 2 &&
    typeof maybe.filter === 'function' &&
    maybe.filter((aa: number) => aa === -1).length === 2;
}

export default isNullSize;