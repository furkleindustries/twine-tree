import {
  parse,
  ParserOptions,
  Stylesheet,
} from 'css';
import {
  ICssParserOptions,
} from './ParserOptions/ICssParserOptions';

export const cssParse = (src: string, options: ICssParserOptions): Stylesheet => {
  return parse(src, <ParserOptions>options);
}

export default cssParse;