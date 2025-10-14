export const SpecifiedAccessSchema = {
  type: 'object',
  properties: {
    type: {
      $ref: '#/definitions/SpecifiedAccessType',
    },
    ids: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
  additionalProperties: false,
  required: ['ids', 'type'],
  definitions: {
    SpecifiedAccessType: {
      type: 'string',
      enum: ['user', 'channel', 'workspace', 'workspace_group'],
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum SpecifiedAccessKeys {
  type = 'type',
  ids = 'ids',
}
