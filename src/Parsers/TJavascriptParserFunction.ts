import {
  Program,
} from 'estree';
import {
  IJavascriptParserOptions,
} from './ParserOptions/IJavascriptParserOptions';

export type TJavascriptParserFunction = (str: string, options: IJavascriptParserOptions) => Program;

export default TJavascriptParserFunction;