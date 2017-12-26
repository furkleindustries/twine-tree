import {
  TagSubtypes,
} from './TagSubtypes';

export interface ITag {
  readonly type:    'tag';
  readonly subtype: TagSubtypes;
  readonly value:   string;
}

export default ITag;