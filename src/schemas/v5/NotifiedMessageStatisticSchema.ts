export const NotifiedMessageStatisticSchema = {
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
  required: ['channel_id', 'notified_messages', 'oldest_notified_message_id'],
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum NotifiedMessageStatisticKeys {
  channel_id = 'channel_id',
  notified_messages = 'notified_messages',
  oldest_notified_message_id = 'oldest_notified_message_id',
}
