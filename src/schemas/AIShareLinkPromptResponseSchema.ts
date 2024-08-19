export const AIShareLinkPromptResponseSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    creator_id: {
      type: 'string',
    },
    prompt_id: {
      type: 'string',
    },
    created_at: {
      type: 'string',
    },
    last_updated_at: {
      type: 'string',
    },
    responses: {
      type: 'array',
      items: {
        $ref: '#/definitions/ResponseByLanguage',
      },
    },
    share_link_ids: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
  additionalProperties: false,
  required: [
    'created_at',
    'creator_id',
    'id',
    'last_updated_at',
    'prompt_id',
    'responses',
    'share_link_ids',
  ],
  definitions: {
    ResponseByLanguage: {
      type: 'object',
      properties: {
        language: {
          type: 'string',
        },
        json: {
          $ref: '#/definitions/Record<string,unknown>',
        },
        text: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        markdown: {
          type: 'string',
        },
      },
      additionalProperties: false,
      required: ['json', 'language'],
    },
    'Record<string,unknown>': {
      type: 'object',
      additionalProperties: false,
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum AIShareLinkPromptResponseKeys {
  id = 'id',
  creator_id = 'creator_id',
  prompt_id = 'prompt_id',
  created_at = 'created_at',
  last_updated_at = 'last_updated_at',
  responses = 'responses',
  share_link_ids = 'share_link_ids',
}
