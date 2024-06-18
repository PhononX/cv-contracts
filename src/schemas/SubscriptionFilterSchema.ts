export const SubscriptionFilterSchema = {
  type: 'object',
  properties: {
    key: {
      type: 'string',
    },
    value: {},
    operator: {
      type: 'string',
      const: 'eq',
    },
  },
  additionalProperties: false,
  required: ['key', 'operator', 'value'],
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum SubscriptionFilterKeys {
  key = 'key',
  value = 'value',
  operator = 'operator',
}
