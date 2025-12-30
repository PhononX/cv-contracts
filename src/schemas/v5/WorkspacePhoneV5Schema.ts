export const WorkspacePhoneV5Schema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    phone: {
      type: 'string',
    },
    created_at: {
      type: 'string',
    },
    updated_at: {
      type: ['null', 'string'],
    },
  },
  additionalProperties: false,
  required: ['created_at', 'id', 'phone'],
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum WorkspacePhoneV5Keys {
  id = 'id',
  phone = 'phone',
  created_at = 'created_at',
  updated_at = 'updated_at',
}
