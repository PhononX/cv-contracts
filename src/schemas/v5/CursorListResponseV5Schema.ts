export const CursorListResponseV5Schema = {
  type: 'object',
  properties: {
    has_more: {
      type: 'boolean',
    },
    next_cursor: {
      type: ['null', 'string'],
    },
    total: {
      type: ['null', 'number'],
    },
    results: {
      type: 'array',
      items: {
        $ref: '#/definitions/T',
      },
    },
    filters: {
      anyOf: [
        {
          $ref: '#/definitions/F',
        },
        {
          type: 'null',
        },
      ],
    },
  },
  additionalProperties: false,
  required: ['has_more', 'results'],
  definitions: {
    T: {
      type: 'object',
      additionalProperties: false,
    },
    F: {
      type: 'object',
      additionalProperties: false,
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum CursorListResponseV5Keys {
  has_more = 'has_more',
  next_cursor = 'next_cursor',
  total = 'total',
  results = 'results',
  filters = 'filters',
}
