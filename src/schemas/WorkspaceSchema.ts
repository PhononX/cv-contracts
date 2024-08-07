export const WorkspaceSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    description: {
      type: ['null', 'string'],
    },
    image_url: {
      type: ['null', 'string'],
    },
    owner_id: {
      type: 'string',
    },
    owner_first_name: {
      type: 'string',
    },
    owner_last_name: {
      type: 'string',
    },
    created_at: {
      type: 'string',
    },
    last_updated_at: {
      type: 'string',
    },
    deleted_at: {
      type: ['null', 'string'],
    },
  },
  additionalProperties: false,
  required: [
    'created_at',
    'id',
    'last_updated_at',
    'name',
    'owner_first_name',
    'owner_id',
    'owner_last_name',
  ],
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum WorkspaceKeys {
  id = 'id',
  name = 'name',
  description = 'description',
  image_url = 'image_url',
  owner_id = 'owner_id',
  owner_first_name = 'owner_first_name',
  owner_last_name = 'owner_last_name',
  created_at = 'created_at',
  last_updated_at = 'last_updated_at',
  deleted_at = 'deleted_at',
}
