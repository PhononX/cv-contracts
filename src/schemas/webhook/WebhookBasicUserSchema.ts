export const WebhookBasicUserSchema = {
  type: 'object',
  properties: {
    user_guid: {
      type: 'string',
    },
    id: {
      description:
        'Preferred user identifier. Same type and optionality as `user_guid`.',
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
  required: ['first_name', 'id', 'last_name', 'user_guid'],
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum WebhookBasicUserKeys {
  user_guid = 'user_guid',
  id = 'id',
  first_name = 'first_name',
  last_name = 'last_name',
}
