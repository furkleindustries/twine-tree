import {
  IParserOptions,
} from './IParserOptions';

export interface ICssParserOptions extends IParserOptions {
  location: true;
  range:    true;
  comments: true;
}

export default ICssParserOptions;