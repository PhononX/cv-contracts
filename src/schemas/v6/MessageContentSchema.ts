export const MessageContentSchema = {
  description:
    'Content of a message in one language: audio plus transcript data.',
  type: 'object',
  properties: {
    ai_summary: {
      type: ['null', 'string'],
    },
    transcript: {
      type: ['null', 'string'],
    },
    time_codes: {
      type: 'array',
      items: {
        $ref: '#/definitions/MessageTimeCode',
      },
    },
    is_original_language: {
      type: ['null', 'boolean'],
    },
    language: {
      type: ['null', 'string'],
    },
    presigned_url: {
      type: ['null', 'string'],
    },
    presigned_url_expiration_date: {
      type: ['null', 'string'],
    },
    url: {
      type: ['null', 'string'],
    },
    streaming_url: {
      type: ['null', 'string'],
    },
    duration_ms: {
      type: ['null', 'number'],
    },
    waveform_percentage: {
      description: 'Waveform percentages encoded as a compressed string.',
      type: ['null', 'string'],
    },
  },
  additionalProperties: false,
  definitions: {
    MessageTimeCode: {
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
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum MessageContentKeys {
  ai_summary = 'ai_summary',
  transcript = 'transcript',
  time_codes = 'time_codes',
  is_original_language = 'is_original_language',
  language = 'language',
  presigned_url = 'presigned_url',
  presigned_url_expiration_date = 'presigned_url_expiration_date',
  url = 'url',
  streaming_url = 'streaming_url',
  duration_ms = 'duration_ms',
  waveform_percentage = 'waveform_percentage',
}
