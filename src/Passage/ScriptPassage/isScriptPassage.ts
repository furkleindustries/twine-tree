import {
  IScriptPassage,
} from './IScriptPassage';
import {
  isJavascriptImportLink,
} from '../../Link/JavascriptImportLink/isJavascriptImportLink';
import {
  isPassage,
} from '../isPassage';
import {
  isProgram,
} from '../../AbstractSyntaxTree/isProgram';
import {
  isRequireLink,
} from '../../Link/RequireLink/isRequireLink';
import {
  PassageSubtypes,
} from '../PassageSubtypes';
import {
  ScriptPassageDialects,
} from './ScriptPassageDialects';

export function isScriptPassage(maybe: any): maybe is IScriptPassage {
  return isPassage(maybe) &&
    maybe.subtype === PassageSubtypes.Script &&
    Object.values(ScriptPassageDialects).includes((<any>maybe).dialect) &&
    isProgram(maybe.abstractSyntaxTree) &&
    maybe.links.filter((aa) => {
      return isJavascriptImportLink(aa) || isRequireLink(aa);
    }).length === maybe.links.length;
}

export default isScriptPassage;