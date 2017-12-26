import isCssImportLink from '../../Link/CssImportLink/isCssImportLink';
import {
  isPassage,
} from '../isPassage';
import {
  isRequireLink,
} from '../../Link/RequireLink/isRequireLink';
import {
  IStylePassage,
} from './IStylePassage';
import {
  isStylesheet,
} from '../../AbstractSyntaxTree/isStylesheet';
import {
  PassageSubtypes,
} from '../PassageSubtypes';
import {
  StylePassageDialects,
} from './StylePassageDialects';

export function isStylePassage(maybe: any): maybe is IStylePassage {
  return isPassage(maybe) &&
    maybe.subtype === PassageSubtypes.Style &&
    Object.values(StylePassageDialects).includes((<any>maybe).dialect) &&
    isStylesheet(maybe.abstractSyntaxTree) &&
    maybe.links.filter((aa) => {
      return isCssImportLink(aa) || isRequireLink(aa);
    }).length === maybe.links.length;
}

export default isStylePassage;