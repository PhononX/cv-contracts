export const BasicUserSchema = {
  type: 'object',
  properties: {
    user_guid: {
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
  required: ['first_name', 'last_name', 'user_guid'],
  $schema: 'http://json-schema.org/draft-07/schema#',
} as const;

export enum BasicUserKeys {
  user_guid = 'user_guid',
  first_name = 'first_name',
  last_name = 'last_name',
}
