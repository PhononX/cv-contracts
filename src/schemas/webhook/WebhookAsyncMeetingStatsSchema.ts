export const WebhookAsyncMeetingStatsSchema = {
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
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum WebhookAsyncMeetingStatsKeys {
  channel_stats = 'channel_stats',
  user_stats = 'user_stats',
}
