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
  THtmlElementAttributeSyntaxNodeMap,
} from '../HtmlElementSyntaxNode/HtmlElementAttributeSyntaxNode/THtmlElementAttributeSyntaxNodeMap';

export class LastReferencedVariableWordSyntaxNode extends AbstractReservedWordSyntaxNode implements ILastReferencedVariableWordSyntaxNode {
  readonly subtype: 'lastReferencedVariableWord' = 'lastReferencedVariableWord';
  readonly source:  'it' = 'it';

  constructor(
    attributes:     THtmlElementAttributeSyntaxNodeMap = {},
    location:       ILocation | null)
  {
    super('it', attributes, location);
  }
}

export default LastReferencedVariableWordSyntaxNode;