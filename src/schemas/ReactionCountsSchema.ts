export const ReactionCountsSchema = {
  type: 'object',
  additionalProperties: {
    type: 'number',
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
  propertyNames: {
    type: 'string',
  },
};

export enum ReactionCountsKeys {}
