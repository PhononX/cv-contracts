export const SubscribedUserSettingsSchema = {
  type: 'object',
  properties: {
    userId: {
      type: 'string',
    },
    user_id: {
      description:
        'Preferred user identifier. Same type and optionality as `userId`.',
      type: 'string',
    },
    defaultLanguage: {
      type: 'string',
    },
    timezone: {
      type: 'number',
    },
  },
  additionalProperties: false,
  required: ['userId', 'user_id'],
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum SubscribedUserSettingsKeys {
  userId = 'userId',
  user_id = 'user_id',
  defaultLanguage = 'defaultLanguage',
  timezone = 'timezone',
}
