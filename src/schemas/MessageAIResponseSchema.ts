export const MessageAIResponseSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    prompt_id: {
      type: 'string',
    },
  },
  additionalProperties: false,
  required: ['id', 'prompt_id'],
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum MessageAIResponseKeys {
  id = 'id',
  prompt_id = 'prompt_id',
}
