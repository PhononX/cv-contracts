export const CursorListResponseV5Schema = {
  type: 'object',
  properties: {
    results: {
      type: 'array',
      items: {
        $ref: '#/definitions/T',
      },
    },
    next_cursor: {
      type: ['null', 'string'],
    },
    has_more: {
      type: 'boolean',
    },
    total: {
      type: ['null', 'number'],
    },
  },
  additionalProperties: false,
  required: ['has_more', 'results'],
  definitions: {
    T: {
      type: 'object',
      additionalProperties: false,
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum CursorListResponseV5Keys {
  results = 'results',
  next_cursor = 'next_cursor',
  has_more = 'has_more',
  total = 'total',
}
