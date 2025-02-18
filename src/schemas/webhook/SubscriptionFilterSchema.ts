export const SubscriptionFilterSchema = {
  type: 'object',
  properties: {
    key: {
      type: 'string',
    },
    value: {},
    operator: {
      $ref: '#/definitions/Operator',
    },
  },
  additionalProperties: false,
  required: ['key', 'operator', 'value'],
  definitions: {
    Operator: {
      type: 'string',
      enum: ['eq', 'ne', 'in'],
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum SubscriptionFilterKeys {
  key = 'key',
  value = 'value',
  operator = 'operator',
}
