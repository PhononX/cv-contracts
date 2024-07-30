export const WebhookAIPromptResponseSchema = {
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
      $ref: '#/definitions/Record<string,string>',
    },
    response_format: {
      $ref: '#/definitions/AIResponseFormat',
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
    'response_format',
    'responses',
  ],
  definitions: {
    'Record<string,string>': {
      type: 'object',
      additionalProperties: false,
    },
    AIResponseFormat: {
      type: 'string',
      enum: ['text', 'json'],
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum WebhookAIPromptResponseKeys {
  id = 'id',
  creator_id = 'creator_id',
  prompt_id = 'prompt_id',
  created_at = 'created_at',
  last_updated_at = 'last_updated_at',
  responses = 'responses',
  response_format = 'response_format',
  message_ids = 'message_ids',
  workspace_id = 'workspace_id',
  channel_id = 'channel_id',
}
