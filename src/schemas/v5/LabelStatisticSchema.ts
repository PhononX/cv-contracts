export const LabelStatisticSchema = {
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
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum LabelStatisticKeys {
  label_id = 'label_id',
  notified_messages = 'notified_messages',
  total_messages = 'total_messages',
  oldest_notified_message_id = 'oldest_notified_message_id',
}
