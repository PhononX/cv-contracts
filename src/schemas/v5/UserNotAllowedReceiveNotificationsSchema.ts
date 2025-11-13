export const UserNotAllowedReceiveNotificationsSchema = {
  type: 'object',
  properties: {
    user_id: {
      type: 'string',
    },
    phone: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
  },
  additionalProperties: false,
  required: ['user_id'],
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum UserNotAllowedReceiveNotificationsKeys {
  user_id = 'user_id',
  phone = 'phone',
  email = 'email',
}
