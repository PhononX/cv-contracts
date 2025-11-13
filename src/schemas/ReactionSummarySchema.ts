export const ReactionSummarySchema = {
  type: 'object',
  properties: {
    reaction_counts: {
      $ref: '#/definitions/ReactionCounts',
    },
    top_user_reactions: {
      type: 'array',
      items: {
        $ref: '#/definitions/UserReaction',
      },
    },
  },
  additionalProperties: false,
  required: ['reaction_counts', 'top_user_reactions'],
  definitions: {
    ReactionCounts: {
      type: 'object',
      additionalProperties: {
        type: 'number',
      },
    },
    UserReaction: {
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
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum ReactionSummaryKeys {
  reaction_counts = 'reaction_counts',
  top_user_reactions = 'top_user_reactions',
}
