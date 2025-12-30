export const BaseCursorListQuerySchema = {
  type: 'object',
  properties: {
    direction: {
      enum: ['newer', 'older'],
      type: 'string',
    },
    limit: {
      type: 'number',
    },
    date: {
      type: 'string',
    },
    starting_after: {
      type: 'string',
    },
    ending_before: {
      type: 'string',
    },
  },
  additionalProperties: false,
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum BaseCursorListQueryKeys {
  direction = 'direction',
  limit = 'limit',
  date = 'date',
  starting_after = 'starting_after',
  ending_before = 'ending_before',
}
