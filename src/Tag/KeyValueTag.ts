import {
  IKeyValueTag,
} from './IKeyValueTag';
import {
  ValueTag,
} from './ValueTag';
import {
  TagSubtypes,
} from './TagSubtypes';

export const strings = {
  KEY_INVALID:
    'The key argument passed to the KeyValueTag constructor was not a ' +
    'string with content.',
};

export class KeyValueTag extends ValueTag implements IKeyValueTag {
  readonly subtype: TagSubtypes.KeyValueTag = TagSubtypes.KeyValueTag;
  readonly key:     string;

  constructor(key: string, value: string) {
    super(value);

    if (typeof key !== 'string' || !key) {
      throw new Error(strings.KEY_INVALID);
    }
  }
}

export default KeyValueTag;