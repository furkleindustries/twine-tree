import {
  AbstractReservedWordSyntaxNode,
} from '../AbstractReservedWordSyntaxNode';
import {
  ILastReferencedVariableWordSyntaxNode,
} from './ILastReferencedVariableWordSyntaxNode';
import {
  ILocation,
} from '../../../ILocation';
import {
  LastReferencedVariableWordSyntaxNodeSubtypes,
} from './LastReferencedVariableWordSyntaxNodeSubtypes';
import {
  THtmlElementAttributeSyntaxNodeMap,
} from '../../HtmlElementSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export class LastReferencedVariableWordSyntaxNode extends AbstractReservedWordSyntaxNode implements ILastReferencedVariableWordSyntaxNode {
  readonly subtype: LastReferencedVariableWordSyntaxNodeSubtypes =
    LastReferencedVariableWordSyntaxNodeSubtypes.LastReferencedVariableWord;

  readonly source: 'it' = 'it';

  constructor(
    attributes: THtmlElementAttributeSyntaxNodeMap = {},
    location:   ILocation | null)
  {
    super('it', attributes, location);
  }
}

export default LastReferencedVariableWordSyntaxNode;