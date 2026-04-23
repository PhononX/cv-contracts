export const WebhookWorkspaceSchema = {
  type: 'object',
  properties: {
    workspace_guid: {
      type: 'string',
    },
    id: {
      description:
        'Preferred workspace identifier. Same type and optionality as `workspace_guid`.',
      type: 'string',
    },
    workspace_name: {
      type: 'string',
    },
    name: {
      description:
        'Preferred workspace display name. Same type and optionality as `workspace_name`.',
      type: 'string',
    },
    workspace_description: {
      type: ['null', 'string'],
    },
    description: {
      description:
        'Preferred workspace description. Same type and optionality as `workspace_description`.',
      type: ['null', 'string'],
    },
    image_url: {
      type: ['null', 'string'],
    },
    owner_guid: {
      type: 'string',
    },
    creator_id: {
      description:
        'Preferred owner/creator user identifier. Same type and optionality as `owner_guid`.',
      type: 'string',
    },
    owner_first_name: {
      type: 'string',
    },
    creator_first_name: {
      description:
        'Preferred creator given name. Same type and optionality as `owner_first_name`.',
      type: 'string',
    },
    owner_last_name: {
      type: 'string',
    },
    creator_last_name: {
      description:
        'Preferred creator family name. Same type and optionality as `owner_last_name`.',
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
    'creator_first_name',
    'creator_id',
    'creator_last_name',
    'id',
    'last_updated_at',
    'name',
    'owner_first_name',
    'owner_guid',
    'owner_last_name',
    'workspace_guid',
    'workspace_name',
  ],
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum WebhookWorkspaceKeys {
  workspace_guid = 'workspace_guid',
  id = 'id',
  workspace_name = 'workspace_name',
  name = 'name',
  workspace_description = 'workspace_description',
  description = 'description',
  image_url = 'image_url',
  owner_guid = 'owner_guid',
  creator_id = 'creator_id',
  owner_first_name = 'owner_first_name',
  creator_first_name = 'creator_first_name',
  owner_last_name = 'owner_last_name',
  creator_last_name = 'creator_last_name',
  created_at = 'created_at',
  last_updated_at = 'last_updated_at',
  deleted_at = 'deleted_at',
}
