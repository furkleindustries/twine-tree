import {
  IJavascriptParserOptions,
} from './ParserOptions/IJavascriptParserOptions';
import {
  JavascriptParserOptions,
} from './ParserOptions/JavascriptParserOptions';
import {
  parseModule,
} from 'esprima';
import {
  Program,
} from 'estree';

export function javascriptParse (
  src: string,
  options: IJavascriptParserOptions = new JavascriptParserOptions()): Program
{
  return parseModule(src, options);
};

export default javascriptParse;