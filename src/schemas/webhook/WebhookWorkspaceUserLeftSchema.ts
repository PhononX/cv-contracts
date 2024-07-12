export const WebhookWorkspaceUserLeftSchema = {
  type: 'object',
  properties: {
    workspace: {
      $ref: '#/definitions/WebhookWorkspace',
    },
    leftUser: {
      $ref: '#/definitions/WebhookBasicUser',
    },
  },
  additionalProperties: false,
  required: ['leftUser', 'workspace'],
  definitions: {
    WebhookWorkspace: {
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
        'last_updated_at',
        'owner_first_name',
        'owner_guid',
        'owner_last_name',
        'workspace_guid',
        'workspace_name',
      ],
    },
    WebhookBasicUser: {
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

export enum WebhookWorkspaceUserLeftKeys {
  workspace = 'workspace',
  leftUser = 'leftUser',
}
