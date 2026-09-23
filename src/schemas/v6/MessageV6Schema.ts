export const MessageV6Schema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    type: {
      $ref: '#/definitions/MessageType',
    },
    kind: {
      anyOf: [
        {
          enum: [
            'action-item',
            'ai-prompt',
            'ai-response',
            'attachment',
            'audio',
            'channel-reminder',
            'text',
          ],
          type: 'string',
        },
        {
          type: 'null',
        },
      ],
    },
    created_at: {
      type: 'string',
    },
    updated_at: {
      type: 'string',
    },
    deleted_at: {
      type: ['null', 'string'],
    },
    conversation_id: {
      type: ['null', 'string'],
    },
    workspace_id: {
      type: 'string',
    },
    creator_id: {
      type: 'string',
    },
    status: {
      $ref: '#/definitions/MessageStatus',
    },
    thread_id: {
      description:
        "The id of the message or its parent.  If it's not equal to id then it's a reply.",
      type: 'string',
    },
    idempotency_key: {
      type: ['null', 'string'],
    },
    attachments: {
      type: 'array',
      items: {
        $ref: '#/definitions/AttachmentV5',
      },
    },
    available_languages: {
      anyOf: [
        {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        {
          type: 'null',
        },
      ],
    },
    original_language: {
      type: ['null', 'string'],
    },
    ai_response_ids: {
      type: 'array',
      items: {
        $ref: '#/definitions/MessageAIResponse',
      },
    },
    share_link_id: {
      type: ['null', 'string'],
    },
    link: {
      type: 'string',
    },
    folder_id: {
      type: ['null', 'string'],
    },
    utm_data: {
      anyOf: [
        {
          $ref: '#/definitions/UtmData',
        },
        {
          type: 'null',
        },
      ],
    },
    conversation_sequence: {
      type: ['null', 'number'],
    },
    source_message_id: {
      type: ['null', 'string'],
    },
    content: {
      anyOf: [
        {
          $ref: '#/definitions/MessageContent',
        },
        {
          type: 'null',
        },
      ],
    },
    users_caught_up: {
      anyOf: [
        {
          enum: ['all', 'none', 'some'],
          type: 'string',
        },
        {
          type: 'null',
        },
      ],
    },
    reaction_summary: {
      anyOf: [
        {
          $ref: '#/definitions/ReactionSummary',
        },
        {
          type: 'null',
        },
      ],
    },
    users_not_allowed_to_receive_notifications: {
      anyOf: [
        {
          type: 'array',
          items: {
            $ref: '#/definitions/UserNotAllowedReceiveNotifications',
          },
        },
        {
          type: 'null',
        },
      ],
    },
    source: {
      anyOf: [
        {
          enum: ['email_ingestion', 'reminder_user_id'],
          type: 'string',
        },
        {
          type: 'null',
        },
      ],
    },
    source_value: {
      type: ['null', 'string'],
    },
    tagged_user_ids: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    heard_ms: {
      type: ['null', 'number'],
    },
    label_ids: {
      anyOf: [
        {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        {
          type: 'null',
        },
      ],
    },
    notify: {
      type: ['null', 'boolean'],
    },
    notes: {
      type: ['null', 'string'],
    },
    last_heard_update: {
      type: ['null', 'string'],
    },
  },
  additionalProperties: false,
  required: [
    'created_at',
    'creator_id',
    'id',
    'link',
    'status',
    'tagged_user_ids',
    'thread_id',
    'type',
    'updated_at',
    'workspace_id',
  ],
  definitions: {
    MessageType: {
      type: 'string',
      enum: ['channel', 'prerecorded', 'voicememo', 'stored', 'welcome'],
    },
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
    AttachmentV5: {
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
        url: {
          type: 'string',
        },
        presigned_url: {
          type: ['null', 'string'],
        },
        presigned_url_expiration_date: {
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
      },
      additionalProperties: false,
      required: ['created_at', 'creator_id', 'id', 'type', 'url'],
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
    MessageAIResponse: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        prompt_id: {
          type: 'string',
        },
      },
      additionalProperties: false,
      required: ['id', 'prompt_id'],
    },
    UtmData: {
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
    },
    MessageContent: {
      description:
        'Content of a message in one language: audio plus transcript data.',
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
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
      required: ['id'],
    },
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
    ReactionSummary: {
      type: 'object',
      properties: {
        reaction_counts: {
          $ref: '#/definitions/ReactionCounts',
        },
        top_user_reactions: {
          type: 'array',
          items: {
            $ref: '#/definitions/UserReaction',
          },
        },
      },
      additionalProperties: false,
      required: ['reaction_counts', 'top_user_reactions'],
    },
    ReactionCounts: {
      type: 'object',
      additionalProperties: {
        type: 'number',
      },
    },
    UserReaction: {
      type: 'object',
      properties: {
        user_id: {
          type: 'string',
        },
        reaction_id: {
          type: 'string',
        },
      },
      additionalProperties: false,
      required: ['reaction_id', 'user_id'],
    },
    UserNotAllowedReceiveNotifications: {
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
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum MessageV6Keys {
  id = 'id',
  type = 'type',
  kind = 'kind',
  created_at = 'created_at',
  updated_at = 'updated_at',
  deleted_at = 'deleted_at',
  conversation_id = 'conversation_id',
  workspace_id = 'workspace_id',
  creator_id = 'creator_id',
  status = 'status',
  thread_id = 'thread_id',
  idempotency_key = 'idempotency_key',
  attachments = 'attachments',
  available_languages = 'available_languages',
  original_language = 'original_language',
  ai_response_ids = 'ai_response_ids',
  share_link_id = 'share_link_id',
  link = 'link',
  folder_id = 'folder_id',
  utm_data = 'utm_data',
  conversation_sequence = 'conversation_sequence',
  source_message_id = 'source_message_id',
  content = 'content',
  users_caught_up = 'users_caught_up',
  reaction_summary = 'reaction_summary',
  users_not_allowed_to_receive_notifications = 'users_not_allowed_to_receive_notifications',
  source = 'source',
  source_value = 'source_value',
  tagged_user_ids = 'tagged_user_ids',
  heard_ms = 'heard_ms',
  label_ids = 'label_ids',
  notify = 'notify',
  notes = 'notes',
  last_heard_update = 'last_heard_update',
}
