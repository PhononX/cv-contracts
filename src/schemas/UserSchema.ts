export const UserSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    link: {
      type: 'string',
    },
    first_name: {
      type: 'string',
    },
    last_name: {
      type: 'string',
    },
    full_name: {
      type: 'string',
    },
    image_url: {
      type: 'string',
    },
    created_at: {
      type: 'string',
    },
    phones: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    emails: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    languages: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
  additionalProperties: false,
  required: ['created_at', 'first_name', 'full_name', 'id', 'link'],
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum UserKeys {
  id = 'id',
  link = 'link',
  first_name = 'first_name',
  last_name = 'last_name',
  full_name = 'full_name',
  image_url = 'image_url',
  created_at = 'created_at',
  phones = 'phones',
  emails = 'emails',
  languages = 'languages',
}
