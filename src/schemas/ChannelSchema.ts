export const ChannelSchema = {
  type: 'object',
  properties: {
    channel_guid: {
      type: 'string',
    },
    channel_name: {
      type: 'string',
    },
    channel_description: {
      type: ['null', 'string'],
    },
    workspace_guid: {
      type: 'string',
    },
    workspace_name: {
      type: 'string',
    },
    workspace_image_url: {
      type: ['null', 'string'],
    },
    owner_guid: {
      type: 'string',
    },
    type: {
      $ref: '#/definitions/ChannelType',
    },
    visibility: {
      $ref: '#/definitions/ChannelVisibility',
    },
    total_messages: {
      type: 'number',
    },
    total_duration_ms: {
      type: 'number',
    },
    image_url: {
      type: ['null', 'string'],
    },
    is_private: {
      type: 'boolean',
    },
    is_async: {
      type: 'boolean',
    },
    async_stats: {
      anyOf: [
        {
          $ref: '#/definitions/AsyncMeetingStats',
        },
        {
          type: 'null',
        },
      ],
    },
    created_at: {
      type: 'string',
    },
    last_updated_at: {
      type: 'string',
    },
    deleted_at: {
      type: 'string',
    },
  },
  additionalProperties: false,
  required: [
    'channel_guid',
    'channel_name',
    'created_at',
    'is_async',
    'is_private',
    'last_updated_at',
    'owner_guid',
    'total_duration_ms',
    'total_messages',
    'type',
    'visibility',
    'workspace_guid',
    'workspace_name',
  ],
  definitions: {
    ChannelType: {
      type: 'string',
      enum: [
        'directMessage',
        'customerConversation',
        'namedConversation',
        'asyncMeeting',
      ],
    },
    ChannelVisibility: {
      type: 'string',
      enum: ['private', 'workspace', 'public'],
    },
    AsyncMeetingStats: {
      type: 'object',
      properties: {
        channel_stats: {
          type: 'object',
          properties: {
            total_duration_milliseconds: {
              type: 'number',
            },
            total_heard_milliseconds: {
              type: 'number',
            },
            total_engaged_percentage: {
              type: 'number',
            },
            total_messages_posted: {
              type: 'number',
            },
            total_users: {
              type: 'number',
            },
          },
          additionalProperties: false,
          required: [
            'total_duration_milliseconds',
            'total_engaged_percentage',
            'total_heard_milliseconds',
            'total_messages_posted',
            'total_users',
          ],
        },
        user_stats: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              user_id: {
                type: 'string',
              },
              total_messages_posted: {
                type: 'number',
              },
              total_sent_milliseconds: {
                type: 'number',
              },
              total_heard_milliseconds: {
                type: 'number',
              },
              total_engaged_percentage: {
                type: 'number',
              },
              total_heard_messages: {
                type: 'number',
              },
              total_unheard_messages: {
                type: 'number',
              },
            },
            additionalProperties: false,
            required: [
              'total_engaged_percentage',
              'total_heard_messages',
              'total_heard_milliseconds',
              'total_messages_posted',
              'total_sent_milliseconds',
              'total_unheard_messages',
              'user_id',
            ],
          },
        },
      },
      additionalProperties: false,
      required: ['channel_stats', 'user_stats'],
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum ChannelKeys {
  channel_guid = 'channel_guid',
  channel_name = 'channel_name',
  channel_description = 'channel_description',
  workspace_guid = 'workspace_guid',
  workspace_name = 'workspace_name',
  workspace_image_url = 'workspace_image_url',
  owner_guid = 'owner_guid',
  type = 'type',
  visibility = 'visibility',
  total_messages = 'total_messages',
  total_duration_ms = 'total_duration_ms',
  image_url = 'image_url',
  is_private = 'is_private',
  is_async = 'is_async',
  async_stats = 'async_stats',
  created_at = 'created_at',
  last_updated_at = 'last_updated_at',
  deleted_at = 'deleted_at',
}
