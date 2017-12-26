import {
  ITag,
} from './ITag';
import {
  TagSubtypes,
} from './TagSubtypes';

export const strings = {
  VALUE_INVALID:
    'The value argument passed to the ValueTag constructor was not a string.',
}

export class ValueTag implements ITag {
  readonly type:    'tag' = 'tag';
  readonly subtype: TagSubtypes = TagSubtypes.ValueTag;
  readonly value:   string;

  constructor(value: string) {
    if (typeof value !== 'string') {
      throw new Error(strings.VALUE_INVALID);
    }

    this.value = value;
  }
}

export default ValueTag;