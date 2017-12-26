import {
  AbstractReservedWordSyntaxNode,
} from '../AbstractReservedWordSyntaxNode';
import {
  ILastReferencedVariableWordSyntaxNode,
} from './ILastReferencedVariableWordSyntaxNode';
import {
  ISourceLocation,
} from '../../../SourceLocation/ISourceLocation';
import {
  LastReferencedVariableWordSyntaxNodeSubtypes,
} from './LastReferencedVariableWordSyntaxNodeSubtypes';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from '../../HtmlSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export class LastReferencedVariableWordSyntaxNode extends AbstractReservedWordSyntaxNode implements ILastReferencedVariableWordSyntaxNode {
  readonly subtype: LastReferencedVariableWordSyntaxNodeSubtypes =
    LastReferencedVariableWordSyntaxNodeSubtypes.LastReferencedVariableWord;

  readonly source: 'it' = 'it';

  constructor(
    attributes: THtmlElementAttributeSyntaxNodeMap = {},
    location:   ISourceLocation | null)
  {
    super('it', attributes, location);
  }
}

export default LastReferencedVariableWordSyntaxNode;