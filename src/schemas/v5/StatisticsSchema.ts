export const StatisticsSchema = {
  type: 'object',
  properties: {
    notified_messages: {
      type: 'array',
      items: {
        $ref: '#/definitions/NotifiedMessageStatistic',
      },
    },
    label_statistics: {
      type: 'array',
      items: {
        $ref: '#/definitions/LabelStatistic',
      },
    },
  },
  additionalProperties: false,
  required: ['label_statistics', 'notified_messages'],
  definitions: {
    NotifiedMessageStatistic: {
      type: 'object',
      properties: {
        channel_id: {
          type: 'string',
        },
        notified_messages: {
          type: 'number',
        },
        oldest_notified_message_id: {
          type: ['null', 'string'],
        },
      },
      additionalProperties: false,
      required: [
        'channel_id',
        'notified_messages',
        'oldest_notified_message_id',
      ],
    },
    LabelStatistic: {
      type: 'object',
      properties: {
        label_id: {
          type: 'string',
        },
        notified_messages: {
          type: 'number',
        },
        total_messages: {
          type: 'number',
        },
        oldest_notified_message_id: {
          type: ['null', 'string'],
        },
      },
      additionalProperties: false,
      required: [
        'label_id',
        'notified_messages',
        'oldest_notified_message_id',
        'total_messages',
      ],
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum StatisticsKeys {
  notified_messages = 'notified_messages',
  label_statistics = 'label_statistics',
}
