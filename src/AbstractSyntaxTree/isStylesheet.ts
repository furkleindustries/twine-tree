import {
  Stylesheet,
} from 'css';

export function isStylesheet(maybe: any): maybe is Stylesheet {
  return typeof maybe === 'object' &&
    maybe &&
    maybe.type === 'Stylesheet' &&
    typeof maybe.stylesheet === 'object' &&
    maybe.stylesheet &&
    Array.isArray(maybe.stylesheet.rules);
}

export default isStylesheet;