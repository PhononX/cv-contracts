export const AttachmentSchema = {
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
    active_begin: {
      type: ['null', 'string'],
    },
    active_end: {
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
    location: {},
  },
  additionalProperties: false,
  required: ['created_at', 'creator_id', 'id', 'link', 'type'],
  definitions: {
    AttachmentType: {
      type: 'string',
      enum: ['link', 'file', 'location'],
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum AttachmentKeys {
  id = 'id',
  creator_id = 'creator_id',
  created_at = 'created_at',
  type = 'type',
  link = 'link',
  active_begin = 'active_begin',
  active_end = 'active_end',
  filename = 'filename',
  mime_type = 'mime_type',
  length_in_bytes = 'length_in_bytes',
  location = 'location',
}
