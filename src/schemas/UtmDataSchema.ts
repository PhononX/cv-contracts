export const UtmDataSchema = {
  type: 'object',
  properties: {
    utm_source: {
      type: ['null', 'string'],
    },
    utm_medium: {
      type: ['null', 'string'],
    },
    utm_campaign: {
      type: ['null', 'string'],
    },
    utm_content: {
      type: ['null', 'string'],
    },
    utm_term: {
      type: ['null', 'string'],
    },
  },
  additionalProperties: false,
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum UtmDataKeys {
  utm_source = 'utm_source',
  utm_medium = 'utm_medium',
  utm_campaign = 'utm_campaign',
  utm_content = 'utm_content',
  utm_term = 'utm_term',
}
