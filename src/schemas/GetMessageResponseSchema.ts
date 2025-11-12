export const GetMessageResponseSchema = {
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
  definitions: {
    Message: {
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
        parent_message_id: {
          type: ['null', 'string'],
        },
        attachments: {
          type: 'array',
          items: {
            $ref: '#/definitions/Attachment',
          },
        },
        language: {
          type: ['null', 'string'],
        },
        is_original_language: {
          type: ['null', 'boolean'],
        },
        transcript: {
          type: ['null', 'string'],
        },
        ai_summary: {
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
        time_codes: {
          type: 'array',
          items: {
            $ref: '#/definitions/MessageTimeCode',
          },
        },
        waveform_percentages: {
          type: 'array',
          items: {
            type: 'number',
          },
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
        audio: {
          anyOf: [
            {
              $ref: '#/definitions/AudioInfo',
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
      },
      additionalProperties: false,
      required: [
        'created_at',
        'creator_id',
        'id',
        'link',
        'status',
        'type',
        'updated_at',
        'workspace_id',
      ],
    },
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
    AudioInfo: {
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
      },
      additionalProperties: false,
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
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum GetMessageResponseKeys {
  message = 'message',
  creator = 'creator',
  conversation = 'conversation',
  labels = 'labels',
}
