export const ResponseByLanguageSchema = {
  type: 'object',
  properties: {
    language: {
      type: 'string',
    },
    json: {
      $ref: '#/definitions/Record<string,unknown>',
    },
    text: {
      type: 'string',
    },
    html: {
      type: 'string',
    },
    markdown: {
      type: 'string',
    },
  },
  additionalProperties: false,
  required: ['json', 'language'],
  definitions: {
    'Record<string,unknown>': {
      type: 'object',
      additionalProperties: false,
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum ResponseByLanguageKeys {
  language = 'language',
  json = 'json',
  text = 'text',
  html = 'html',
  markdown = 'markdown',
}
