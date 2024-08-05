export const AIPromptResponseSchema = {
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
    message_ids: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    workspace_id: {
      type: 'string',
    },
    channel_id: {
      type: 'string',
    },
  },
  additionalProperties: false,
  required: [
    'created_at',
    'creator_id',
    'id',
    'last_updated_at',
    'message_ids',
    'prompt_id',
    'responses',
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

export enum AIPromptResponseKeys {
  id = 'id',
  creator_id = 'creator_id',
  prompt_id = 'prompt_id',
  created_at = 'created_at',
  last_updated_at = 'last_updated_at',
  responses = 'responses',
  message_ids = 'message_ids',
  workspace_id = 'workspace_id',
  channel_id = 'channel_id',
}
