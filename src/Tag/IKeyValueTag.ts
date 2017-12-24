import {
  ITag,
} from './ITag';

export interface IKeyValueTag extends ITag {
  readonly subtype: 'keyValueTag';
  readonly key:     string;
  readonly value:   string;
}

export default IKeyValueTag;