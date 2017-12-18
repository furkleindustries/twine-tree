import {
  Stylesheet,
} from 'css';
import {
  ICssParserOptions,
} from './ParserOptions/ICssParserOptions';

export type TCssParserFunction = (str: string, options: ICssParserOptions) => Stylesheet;

export default TCssParserFunction;