export const MessageStatisticSchema = {
  type: 'object',
  properties: {
    group_id: {
      type: 'string',
    },
    group_type: {
      $ref: '#/definitions/GroupType',
    },
    total: {
      type: 'number',
    },
    notified: {
      type: 'number',
    },
    oldest_notified_message_id: {
      type: 'string',
    },
    oldest_message_id: {
      type: 'string',
    },
  },
  additionalProperties: false,
  required: [
    'group_id',
    'group_type',
    'notified',
    'oldest_message_id',
    'oldest_notified_message_id',
    'total',
  ],
  definitions: {
    GroupType: {
      enum: ['conversation_id', 'label_id'],
      type: 'string',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum MessageStatisticKeys {
  group_id = 'group_id',
  group_type = 'group_type',
  total = 'total',
  notified = 'notified',
  oldest_notified_message_id = 'oldest_notified_message_id',
  oldest_message_id = 'oldest_message_id',
}
