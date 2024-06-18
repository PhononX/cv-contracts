export const WorkspaceSchema = {
  type: 'object',
  properties: {
    workspace_guid: {
      type: 'string',
    },
    workspace_name: {
      type: 'string',
    },
    workspace_description: {
      type: ['null', 'string'],
    },
    image_url: {
      type: ['null', 'string'],
    },
    owner_guid: {
      type: 'string',
    },
    owner_first_name: {
      type: 'string',
    },
    owner_last_name: {
      type: 'string',
    },
    created_at: {
      type: 'number',
    },
    last_updated_at: {
      type: 'number',
    },
    deleted_at: {
      type: ['null', 'number'],
    },
  },
  additionalProperties: false,
  required: [
    'created_at',
    'last_updated_at',
    'owner_first_name',
    'owner_guid',
    'owner_last_name',
    'workspace_guid',
    'workspace_name',
  ],
  $schema: 'http://json-schema.org/draft-07/schema#',
} as const;

export enum WorkspaceKeys {
  workspace_guid = 'workspace_guid',
  workspace_name = 'workspace_name',
  workspace_description = 'workspace_description',
  image_url = 'image_url',
  owner_guid = 'owner_guid',
  owner_first_name = 'owner_first_name',
  owner_last_name = 'owner_last_name',
  created_at = 'created_at',
  last_updated_at = 'last_updated_at',
  deleted_at = 'deleted_at',
}
