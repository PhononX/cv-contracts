export const MessageTimeCodeSchema = {
  type: 'object',
  properties: {
    t: {
      type: 'string',
    },
    s: {
      type: 'number',
    },
    e: {
      type: 'number',
    },
  },
  additionalProperties: false,
  required: ['e', 's', 't'],
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum MessageTimeCodeKeys {
  t = 't',
  s = 's',
  e = 'e',
}
