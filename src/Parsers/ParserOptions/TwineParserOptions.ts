import {
  ITwineParserOptions,
} from './ITwineParserOptions';
import {
  TCssParserFunction,
} from '../TCssParserFunction';
import {
  TJavascriptParserFunction,
} from '../TJavascriptParserFunction';
import {
  TTwineParserFunction,
} from '../TTwineParserFunction';

export class TwineParserOptions implements ITwineParserOptions {
  comments:        boolean                          = false;
  location:        boolean                          = false;
  range:           boolean                          = false;
  cssParse:        TCssParserFunction | null        = null;
  javascriptParse: TJavascriptParserFunction | null = null;

  readonly strings = {
    COMMENTS_INVALID:
      'The comments argument passed to the TwineParserOptions constructor ' +
      'was not a boolean.',

    LOCATION_INVALID:
      'The location argument passed to the TwineParserOptions constructor ' +
      'was not a boolean.',

    RANGE_INVALID:
      'The range argument passed to the TwineParserOptions constructor was ' +
      'not a boolean.',

    CSS_PARSE_INVALID:
      'The cssParse argument passed to the TwineParserOptions constructor ' +
      'was not a function.',

    JAVASCRIPT_PARSE_INVALID:
      'The javascriptParse argument passed to the TwineParserOptions ' +
      'constructor was not a function.',
  };

  constructor(
    comments:         boolean                     = false,
    location:         boolean                     = false,
    range:            boolean                     = false,
    cssParse:         TTwineParserFunction | null = null,
    javascriptParse:  TTwineParserFunction | null = null)
  {
    if (typeof comments !== 'boolean') {
      throw new Error(this.strings.COMMENTS_INVALID);
    } else if (typeof location !== 'boolean') {
      throw new Error(this.strings.LOCATION_INVALID);
    } else if (typeof range !== 'boolean') {
      throw new Error(this.strings.RANGE_INVALID);
    } else if (arguments.length >= 4 && typeof cssParse !== 'function') {
      throw new Error(this.strings.CSS_PARSE_INVALID);
    } else if (arguments.length >= 5 && typeof javascriptParse !== 'function') {
      throw new Error(this.strings.JAVASCRIPT_PARSE_INVALID);
    }

    this.comments        = comments;
    this.location        = location;
    this.range           = range;
    this.cssParse        = <TCssParserFunction | null>cssParse;
    this.javascriptParse = <TJavascriptParserFunction | null>cssParse;
  }
}

export default TwineParserOptions;