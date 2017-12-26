import {
  IPassage,
} from './IPassage';
import {
  isAbstractSyntaxTree,
} from '../AbstractSyntaxTree/isAbstractSyntaxTree';
import {
  isPosition,
} from '../Position/isPosition';
import {
  isSize,
} from '../Size/isSize';
import {
  isTag,
} from '../Tag/isTag';
import {
  PassageSubtypes,
} from './PassageSubtypes';

export function isPassage(maybe: any): maybe is IPassage {
  return typeof maybe === 'object' &&
    maybe &&
    maybe.type === 'passage' &&
    Object.values(PassageSubtypes).includes(maybe.subtype) &&
    maybe.pid >= 1 &&
    maybe.pid % 1 === 0 &&
    typeof maybe.name === 'string' &&
    maybe.name !== '' &&
    isAbstractSyntaxTree(maybe.abstractSyntaxTree) &&
    isPosition(maybe.position) &&
    isSize(maybe.size) &&
    Array.isArray(maybe.tags) &&
    maybe.tags.filter((aa: any) => {
      return isTag(aa);
    }).length === maybe.tags.length; 
}

export default isPassage;