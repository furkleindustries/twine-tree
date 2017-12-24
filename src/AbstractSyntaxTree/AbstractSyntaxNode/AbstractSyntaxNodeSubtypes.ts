import {
  ArgumentSyntaxNodeSubtypes,
} from './ArgumentSyntaxNode/ArgumentSyntaxNodeSubtypes';
import {
  HtmlElementSyntaxNodeSubtypes,
} from './HtmlElementSyntaxNode/HtmlElementSyntaxNode/HtmlElementSyntaxNodeSubtypes';
import {
  InvocationBodySyntaxNodeSubtypes,
} from './InvocationBodySyntaxNode/InvocationBodySyntaxNodeSubtypes';
import {
  InvocationSyntaxNodeSubtypes,
} from './InvocationSyntaxNode/InvocationSyntaxNodeSubtypes';
import {
  LinkSyntaxNodeSubtypes,
} from './LinkSyntaxNode/LinkSyntaxNodeSubtypes';
import {
  NumberSyntaxNodeSubtypes,
} from './NumberSyntaxNode/NumberSyntaxNodeSubtypes';
import {
  ReservedWordSyntaxNodeSubtypes,
} from './ReservedWordSyntaxNode/ReservedWordSyntaxNodeSubtypes';
import {
  StringSyntaxNodeSubtypes,
} from './StringSyntaxNode/StringSyntaxNodeSubtypes';
import {
  VariableSyntaxNodeSubtypes,
} from './VariableSyntaxNode/VariableSyntaxNodeSubtypes';

export type AbstractSyntaxNodeSubtypes =
  ArgumentSyntaxNodeSubtypes |
  HtmlElementSyntaxNodeSubtypes |
  InvocationBodySyntaxNodeSubtypes |
  InvocationSyntaxNodeSubtypes |
  LinkSyntaxNodeSubtypes |
  NumberSyntaxNodeSubtypes |
  ReservedWordSyntaxNodeSubtypes |
  StringSyntaxNodeSubtypes |
  VariableSyntaxNodeSubtypes;

export default AbstractSyntaxNodeSubtypes;