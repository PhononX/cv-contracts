export const UserReactionSchema = {
  type: 'object',
  properties: {
    user_id: {
      type: 'string',
    },
    reaction_id: {
      type: 'string',
    },
  },
  additionalProperties: false,
  required: ['reaction_id', 'user_id'],
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum UserReactionKeys {
  user_id = 'user_id',
  reaction_id = 'reaction_id',
}
