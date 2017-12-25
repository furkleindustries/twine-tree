import {
  AbstractSyntaxNodeTypes as types,
} from './AbstractSyntaxNodeTypes';

export const AbstractSyntaxNodeTypeToTagNameMap = {
  [types.Argument]:       'tw-argument',
  [types.Invocation]:     'tw-invocation',
  [types.InvocationBody]: 'tw-invocation-body',
  [types.Link]:           'tw-link',
  [types.Number]:         'tw-number',
  [types.ReservedWord]:   'tw-reserved-word',
  [types.String]:         'tw-string',
  [types.Variable]:       'tw-variable',
}

export default AbstractSyntaxNodeTypeToTagNameMap;