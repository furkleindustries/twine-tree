export function isNonNullSize(maybe: any): boolean {
  return typeof maybe === 'object' &&
    maybe &&
    maybe.length === 2 &&
    typeof maybe.filter === 'function' &&
    maybe.filter((aa: number) => aa >= 0).length === 2;
}

export default isNonNullSize;