export const MessageShareLinkSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    link: {
      type: 'string',
    },
    created_by: {
      type: 'string',
    },
    message_id: {
      type: ['null', 'string'],
    },
    conversation_id: {
      type: ['null', 'string'],
    },
    created_at: {
      type: 'string',
    },
    last_updated_at: {
      type: 'string',
    },
    end_access_at: {
      type: ['null', 'string'],
    },
    revoked_at: {
      type: ['null', 'string'],
    },
    revoked_by: {
      type: ['null', 'string'],
    },
    share_type: {
      $ref: '#/definitions/ShareType',
    },
    access_type: {
      $ref: '#/definitions/AccessType',
    },
    specified_access: {
      anyOf: [
        {
          type: 'array',
          items: {
            $ref: '#/definitions/SpecifiedAccess',
          },
        },
        {
          type: 'null',
        },
      ],
    },
    shared_message: {
      $ref: '#/definitions/Message',
    },
  },
  additionalProperties: false,
  required: [
    'access_type',
    'created_at',
    'created_by',
    'id',
    'last_updated_at',
    'link',
    'share_type',
    'shared_message',
  ],
  definitions: {
    ShareType: {
      type: 'string',
      enum: ['link', 'forward'],
    },
    AccessType: {
      type: 'string',
      enum: ['public', 'forward', 'specified'],
    },
    SpecifiedAccess: {
      type: 'object',
      properties: {
        type: {
          $ref: '#/definitions/SpecifiedAccessType',
        },
        ids: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      },
      additionalProperties: false,
      required: ['ids', 'type'],
    },
    SpecifiedAccessType: {
      type: 'string',
      enum: ['user', 'channel', 'workspace'],
    },
    Message: {
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

export enum MessageShareLinkKeys {
  id = 'id',
  link = 'link',
  created_by = 'created_by',
  message_id = 'message_id',
  conversation_id = 'conversation_id',
  created_at = 'created_at',
  last_updated_at = 'last_updated_at',
  end_access_at = 'end_access_at',
  revoked_at = 'revoked_at',
  revoked_by = 'revoked_by',
  share_type = 'share_type',
  access_type = 'access_type',
  specified_access = 'specified_access',
  shared_message = 'shared_message',
}
