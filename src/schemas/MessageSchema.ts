export const MessageSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    name: {
      type: ['null', 'string'],
    },
    link: {
      type: 'string',
    },
    creator_id: {
      type: 'string',
    },
    conversation_id: {
      type: ['null', 'string'],
    },
    workspace_id: {
      type: ['null', 'string'],
    },
    created_at: {
      type: 'string',
    },
    last_updated_at: {
      type: 'string',
    },
    deleted_at: {
      type: ['null', 'string'],
    },
    duration_ms: {
      type: 'number',
    },
    audio_url: {
      type: ['null', 'string'],
    },
    audio_stream_url: {
      type: ['null', 'string'],
    },
    transcript: {
      type: ['null', 'string'],
    },
    ai_summary: {
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
    parent_message_id: {
      type: ['null', 'string'],
    },
    language: {
      type: ['null', 'string'],
    },
    status: {
      $ref: '#/definitions/MessageStatus',
    },
    attachments: {
      type: 'array',
      items: {
        $ref: '#/definitions/Attachment',
      },
    },
    type: {
      $ref: '#/definitions/MessageType',
    },
    share_link_id: {
      type: 'string',
    },
  },
  additionalProperties: false,
  required: [
    'created_at',
    'creator_id',
    'duration_ms',
    'id',
    'last_updated_at',
    'link',
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
        'failed',
      ],
    },
    Attachment: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        creator_id: {
          type: 'string',
        },
        created_at: {
          type: 'string',
        },
        type: {
          $ref: '#/definitions/AttachmentType',
        },
        link: {
          type: 'string',
        },
        active_begin: {
          type: ['null', 'string'],
        },
        active_end: {
          type: ['null', 'string'],
        },
        filename: {
          type: ['null', 'string'],
        },
        mime_type: {
          type: ['null', 'string'],
        },
        length_in_bytes: {
          type: ['null', 'number'],
        },
        location: {},
      },
      additionalProperties: false,
      required: ['created_at', 'creator_id', 'id', 'link', 'type'],
    },
    AttachmentType: {
      type: 'string',
      enum: [
        'link',
        'file',
        'location',
        'ai-response-id',
        'ai-prompt-id',
        'action-item-id',
      ],
    },
    MessageType: {
      type: 'string',
      enum: ['channel', 'prerecorded', 'voicememo', 'stored', 'welcome'],
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum MessageKeys {
  id = 'id',
  name = 'name',
  link = 'link',
  creator_id = 'creator_id',
  conversation_id = 'conversation_id',
  workspace_id = 'workspace_id',
  created_at = 'created_at',
  last_updated_at = 'last_updated_at',
  deleted_at = 'deleted_at',
  duration_ms = 'duration_ms',
  audio_url = 'audio_url',
  audio_stream_url = 'audio_stream_url',
  transcript = 'transcript',
  ai_summary = 'ai_summary',
  has_ai_summary = 'has_ai_summary',
  waveform_url = 'waveform_url',
  reply_count = 'reply_count',
  parent_message_id = 'parent_message_id',
  language = 'language',
  status = 'status',
  attachments = 'attachments',
  type = 'type',
  share_link_id = 'share_link_id',
}
