export const AudioInfoSchema = {
  type: 'object',
  properties: {
    url: {
      type: ['null', 'string'],
    },
    streaming_url: {
      type: ['null', 'string'],
    },
    presigned_url: {
      type: ['null', 'string'],
    },
    presigned_url_expiration_date: {
      type: ['null', 'string'],
    },
    duration_ms: {
      type: ['null', 'number'],
    },
    waveform_percentages: {
      type: 'array',
      items: {
        type: 'number',
      },
    },
  },
  additionalProperties: false,
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum AudioInfoKeys {
  url = 'url',
  streaming_url = 'streaming_url',
  presigned_url = 'presigned_url',
  presigned_url_expiration_date = 'presigned_url_expiration_date',
  duration_ms = 'duration_ms',
  waveform_percentages = 'waveform_percentages',
}
