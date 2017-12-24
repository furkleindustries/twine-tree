import {
  IKeyValueTag,
} from './IKeyValueTag';

export const strings = {
  KEY_INVALID:
    'The key argument passed to the KeyValueTag constructor was not a ' +
    'string with content.',

  VALUE_INVALID:
    'The value argument passed to the KeyValueTag constructor was not a ' +
    'string.',
};

export class KeyValueTag implements IKeyValueTag {
  readonly type:    'tag' = 'tag';
  readonly subtype: 'keyValueTag';
  readonly key:     string;
  readonly value:   string;

  constructor(key: string, value: string) {
    if (typeof key !== 'string' || !key) {
      throw new Error(strings.KEY_INVALID);
    } else if (typeof value !== 'string') {
      throw new Error(strings.VALUE_INVALID);
    }
  }
}

export default KeyValueTag;