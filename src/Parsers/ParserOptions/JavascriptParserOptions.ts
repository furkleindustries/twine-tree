import {
  IParserOptions,
} from './IParserOptions';

export class JavascriptParserOptions implements IParserOptions {
  comments = false;
  location = false;
  range    = false;

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
  };

  constructor(
    comments: boolean = false,
    location: boolean = false,
    range:    boolean = false)
  {
    if (typeof comments !== 'boolean') {
      throw new Error(this.strings.COMMENTS_INVALID);
    } else if (typeof location !== 'boolean') {
      throw new Error(this.strings.LOCATION_INVALID);
    } else if (typeof range !== 'boolean') {
      throw new Error(this.strings.RANGE_INVALID);
    }

    this.comments = comments;
    this.location = location;
    this.range    = range;
  }
}

export default JavascriptParserOptions;