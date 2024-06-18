export const MessageSchema = {
  type: 'object',
  properties: {
    message_guid: {
      type: 'string',
    },
    creator_guid: {
      type: 'string',
    },
    channel_guid: {
      type: ['null', 'string'],
    },
    workspace_guid: {
      type: ['null', 'string'],
    },
    created_at: {
      type: 'number',
    },
    last_updated_at: {
      type: 'number',
    },
    deleted_at: {
      type: ['null', 'number'],
    },
    duration_ms: {
      type: 'number',
    },
    message_url: {
      type: ['null', 'string'],
    },
    audio_stream_url: {
      type: ['null', 'string'],
    },
    transcript_txt: {
      type: ['null', 'string'],
    },
    ai_summary_txt: {
      type: ['null', 'string'],
    },
    has_ai_summary: {
      type: 'boolean',
    },
    waveform_url: {
      type: ['null', 'string'],
    },
    reply_count: {
      type: 'number',
    },
    parent_message_guid: {
      type: ['null', 'string'],
    },
    language: {
      type: ['null', 'string'],
    },
    status: {
      $ref: '#/definitions/MessageStatus',
    },
    type: {
      $ref: '#/definitions/MessageType',
    },
  },
  additionalProperties: false,
  required: [
    'created_at',
    'creator_guid',
    'duration_ms',
    'last_updated_at',
    'message_guid',
    'reply_count',
    'status',
    'type',
  ],
  definitions: {
    MessageStatus: {
      type: 'string',
      enum: [
        'offline',
        'paused',
        'processing',
        'scheduled',
        'active',
        'deleted',
        'account-deleted',
        'initializing',
        'inprogress',
        'canceled',
      ],
    },
    MessageType: {
      type: 'string',
      enum: ['channel', 'prerecorded', 'voicememo', 'stored', 'welcome'],
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
} as const;

export enum MessageKeys {
  message_guid = 'message_guid',
  creator_guid = 'creator_guid',
  channel_guid = 'channel_guid',
  workspace_guid = 'workspace_guid',
  created_at = 'created_at',
  last_updated_at = 'last_updated_at',
  deleted_at = 'deleted_at',
  duration_ms = 'duration_ms',
  message_url = 'message_url',
  audio_stream_url = 'audio_stream_url',
  transcript_txt = 'transcript_txt',
  ai_summary_txt = 'ai_summary_txt',
  has_ai_summary = 'has_ai_summary',
  waveform_url = 'waveform_url',
  reply_count = 'reply_count',
  parent_message_guid = 'parent_message_guid',
  language = 'language',
  status = 'status',
  type = 'type',
}
