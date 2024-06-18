export const AttachmentSchema = {
  type: 'object',
  properties: {
    _id: {
      type: 'string',
    },
    creator_id: {
      type: 'string',
    },
    created_at: {
      type: 'string',
      format: 'date-time',
    },
    type: {
      $ref: '#/definitions/AttachmentType',
    },
    link: {
      type: 'string',
    },
    active_begin: {
      anyOf: [
        {
          type: 'string',
          format: 'date-time',
        },
        {
          type: 'null',
        },
      ],
    },
    active_end: {
      anyOf: [
        {
          type: 'string',
          format: 'date-time',
        },
        {
          type: 'null',
        },
      ],
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
  required: ['_id', 'created_at', 'creator_id', 'link', 'type'],
  definitions: {
    AttachmentType: {
      type: 'string',
      enum: ['link', 'file', 'location'],
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum AttachmentKeys {
  _id = '_id',
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
