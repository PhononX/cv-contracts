export const WebhookLabelAddedToMessageSchema = {
  type: 'object',
  properties: {
    label: {
      $ref: '#/definitions/Label',
    },
    message: {
      $ref: '#/definitions/GetMessageResponse',
    },
  },
  additionalProperties: false,
  required: ['label', 'message'],
  definitions: {
    Label: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        behavior: {
          $ref: '#/definitions/LabelBehavior',
        },
        type: {
          $ref: '#/definitions/LabelType',
        },
        creator_guid: {
          type: 'string',
        },
        space_guid: {
          type: ['null', 'string'],
        },
        image_url: {
          type: ['null', 'string'],
        },
        automatic_playlist: {
          type: 'boolean',
        },
        sort_order: {
          type: 'number',
        },
      },
      additionalProperties: false,
      required: ['behavior', 'creator_guid', 'id', 'name', 'type'],
    },
    LabelBehavior: {
      type: 'string',
      enum: ['removeOnListenStart', 'removeWhenHeard', 'persistent'],
    },
    LabelType: {
      type: 'string',
      enum: ['personal', 'workspace', 'system', 'reaction'],
    },
    GetMessageResponse: {
      type: 'object',
      properties: {
        message: {
          $ref: '#/definitions/Message',
        },
        creator: {
          $ref: '#/definitions/User',
        },
        conversation: {
          $ref: '#/definitions/Conversation',
        },
        labels: {
          type: 'array',
          items: {
            $ref: '#/definitions/Label',
          },
        },
      },
      additionalProperties: false,
      required: ['message'],
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
      enum: ['link', 'file', 'location', 'ai-response-id', 'ai-prompt-id'],
    },
    MessageType: {
      type: 'string',
      enum: ['channel', 'prerecorded', 'voicememo', 'stored', 'welcome'],
    },
    User: {
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
    },
    Conversation: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        link: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        description: {
          type: ['null', 'string'],
        },
        workspace_id: {
          type: 'string',
        },
        workspace_name: {
          type: 'string',
        },
        workspace_image_url: {
          type: ['null', 'string'],
        },
        owner_id: {
          type: 'string',
        },
        type: {
          $ref: '#/definitions/ConversationType',
        },
        visibility: {
          $ref: '#/definitions/ConversationVisibility',
        },
        total_messages: {
          type: 'number',
        },
        total_duration_ms: {
          type: 'number',
        },
        image_url: {
          type: ['null', 'string'],
        },
        is_private: {
          type: 'boolean',
        },
        is_async: {
          type: 'boolean',
        },
        async_stats: {
          anyOf: [
            {
              $ref: '#/definitions/AsyncMeetingStats',
            },
            {
              type: 'null',
            },
          ],
        },
        created_at: {
          type: 'string',
        },
        last_updated_at: {
          type: 'string',
        },
        deleted_at: {
          type: 'string',
        },
      },
      additionalProperties: false,
      required: [
        'created_at',
        'id',
        'is_async',
        'is_private',
        'last_updated_at',
        'link',
        'name',
        'owner_id',
        'total_duration_ms',
        'total_messages',
        'type',
        'visibility',
        'workspace_id',
        'workspace_name',
      ],
    },
    ConversationType: {
      type: 'string',
      enum: [
        'directMessage',
        'customerConversation',
        'namedConversation',
        'asyncMeeting',
      ],
    },
    ConversationVisibility: {
      type: 'string',
      enum: ['private', 'workspace', 'public'],
    },
    AsyncMeetingStats: {
      type: 'object',
      properties: {
        stats: {
          type: 'object',
          properties: {
            total_duration_milliseconds: {
              type: 'number',
            },
            total_heard_milliseconds: {
              type: 'number',
            },
            total_engaged_percentage: {
              type: 'number',
            },
            total_messages_posted: {
              type: 'number',
            },
            total_users: {
              type: 'number',
            },
          },
          additionalProperties: false,
          required: [
            'total_duration_milliseconds',
            'total_engaged_percentage',
            'total_heard_milliseconds',
            'total_messages_posted',
            'total_users',
          ],
        },
        user_stats: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              user_id: {
                type: 'string',
              },
              total_messages_posted: {
                type: 'number',
              },
              total_sent_milliseconds: {
                type: 'number',
              },
              total_heard_milliseconds: {
                type: 'number',
              },
              total_engaged_percentage: {
                type: 'number',
              },
              total_heard_messages: {
                type: 'number',
              },
              total_unheard_messages: {
                type: 'number',
              },
            },
            additionalProperties: false,
            required: [
              'total_engaged_percentage',
              'total_heard_messages',
              'total_heard_milliseconds',
              'total_messages_posted',
              'total_sent_milliseconds',
              'total_unheard_messages',
              'user_id',
            ],
          },
        },
      },
      additionalProperties: false,
      required: ['stats', 'user_stats'],
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum WebhookLabelAddedToMessageKeys {
  label = 'label',
  message = 'message',
}
