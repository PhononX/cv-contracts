export const SubscribedUserSettingsSchema = {
  type: 'object',
  properties: {
    userId: {
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
  required: ['userId'],
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum SubscribedUserSettingsKeys {
  userId = 'userId',
  defaultLanguage = 'defaultLanguage',
  timezone = 'timezone',
}
