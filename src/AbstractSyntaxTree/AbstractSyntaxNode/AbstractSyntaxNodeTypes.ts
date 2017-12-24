export enum AbstractSyntaxNodeTypes {
  Argument             = 'argument',
  HtmlElement          = 'htmlElement',
  HtmlElementAttribute = 'htmlElementAttribute',
  Invocation           = 'invocation',
  InvocationBody       = 'invocationBody',
  Link                 = 'link',
  Number               = 'number',
  String               = 'string',
  Variable             = 'variable',
  ReservedWord         = 'reservedWord',
}

export default AbstractSyntaxNodeTypes;