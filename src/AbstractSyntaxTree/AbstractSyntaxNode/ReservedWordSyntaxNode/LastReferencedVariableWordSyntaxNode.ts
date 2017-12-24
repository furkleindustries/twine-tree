import {
  AbstractReservedWordSyntaxNode,
} from './AbstractReservedWordSyntaxNode';
import {
  ILastReferencedVariableWordSyntaxNode,
} from './ILastReferencedVariableWordSyntaxNode';
import {
  ILocation,
} from '../../ILocation';
import {
  THtmlAttributeSyntaxNodeMap,
} from '../HtmlSyntaxNode/THtmlAttributeSyntaxNodeMap';

export class LastReferencedVariableWordSyntaxNode extends AbstractReservedWordSyntaxNode implements ILastReferencedVariableWordSyntaxNode {
  readonly subtype: 'lastReferencedVariableWord' = 'lastReferencedVariableWord';
  readonly source:  'it' = 'it';

  constructor(
    attributes:     THtmlAttributeSyntaxNodeMap = {},
    location:       ILocation | null)
  {
    super('it', attributes, location);
  }
}

export default LastReferencedVariableWordSyntaxNode;