import {
  Program,
} from 'esprima';

export function isProgram(maybe: any): maybe is Program {
  return typeof maybe === 'object' &&
    maybe &&
    maybe.type === 'Program' &&
    Array.isArray(maybe.body);
}

export default isProgram;