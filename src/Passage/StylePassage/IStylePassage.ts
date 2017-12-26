import {
  ICssImportLink,
} from '../../Link/CssImportLink/ICssImportLink';
import {
  IPassage,
} from '../IPassage';
import {
  PassageSubtypes,
} from '../PassageSubtypes';
import {
  StylePassageDialects,
} from './StylePassageDialects';
import {
  Stylesheet,
} from 'css';

export interface IStylePassage extends IPassage {
  readonly subtype:            PassageSubtypes.Style;
  readonly dialect:            StylePassageDialects;
  readonly abstractSyntaxTree: Stylesheet;
  readonly links:              Array<ICssImportLink>;
}

export default IStylePassage;