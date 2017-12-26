import {
  ITag,
} from './ITag';
import {
  TagSubtypes,
} from './TagSubtypes';

export interface IKeyValueTag extends ITag {
  readonly subtype: TagSubtypes.KeyValueTag;
  readonly key:     string;
}

export default IKeyValueTag;