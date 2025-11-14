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
    url: {
      type: 'string',
    },
    presigned_url: {
      type: ['null', 'string'],
    },
    presigned_url_expiration_date: {
      type: ['null', 'string'],
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
  required: ['created_at', 'creator_id', 'id', 'type', 'url'],
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
  url = 'url',
  presigned_url = 'presigned_url',
  presigned_url_expiration_date = 'presigned_url_expiration_date',
  filename = 'filename',
  mime_type = 'mime_type',
  length_in_bytes = 'length_in_bytes',
}
