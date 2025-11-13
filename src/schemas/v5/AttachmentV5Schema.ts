export const AttachmentV5Schema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    creator_id: {
      type: 'string',
    },
    created_at: {
      type: 'string',
    },
    type: {
      $ref: '#/definitions/AttachmentType',
    },
    link: {
      type: 'string',
    },
    filename: {
      type: ['null', 'string'],
    },
    mime_type: {
      type: ['null', 'string'],
    },
    length_in_bytes: {
      type: ['null', 'number'],
    },
  },
  additionalProperties: false,
  required: ['created_at', 'creator_id', 'id', 'link', 'type'],
  definitions: {
    AttachmentType: {
      type: 'string',
      enum: [
        'link',
        'file',
        'location',
        'ai-response-id',
        'ai-prompt-id',
        'action-item-id',
      ],
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum AttachmentV5Keys {
  id = 'id',
  creator_id = 'creator_id',
  created_at = 'created_at',
  type = 'type',
  link = 'link',
  filename = 'filename',
  mime_type = 'mime_type',
  length_in_bytes = 'length_in_bytes',
}
