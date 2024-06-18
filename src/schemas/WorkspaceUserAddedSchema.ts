export const WorkspaceUserAddedSchema = {
  type: 'object',
  properties: {
    workspace: {
      $ref: '#/definitions/Workspace',
    },
    addedUser: {
      $ref: '#/definitions/BasicUser',
    },
  },
  additionalProperties: false,
  required: ['addedUser', 'workspace'],
  definitions: {
    Workspace: {
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
    },
    BasicUser: {
      type: 'object',
      properties: {
        user_guid: {
          type: 'string',
        },
        first_name: {
          type: 'string',
        },
        last_name: {
          type: 'string',
        },
      },
      additionalProperties: false,
      required: ['first_name', 'last_name', 'user_guid'],
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum WorkspaceUserAddedKeys {
  workspace = 'workspace',
  addedUser = 'addedUser',
}
