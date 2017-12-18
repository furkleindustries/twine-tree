import {
  IParserOptions,
} from './IParserOptions';

export interface IJavascriptParserOptions extends IParserOptions {
  tokens?: boolean;
}

export default IJavascriptParserOptions;