export const GetMessageResponseV2Schema = {
  type: 'object',
  properties: {
    message: {
      $ref: '#/definitions/MessageV3',
    },
  },
  additionalProperties: false,
  required: ['message'],
  definitions: {
    MessageV3: {
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
            $ref: '#/definitions/AttachmentV2',
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
    AttachmentV2: {
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
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum GetMessageResponseV2Keys {
  message = 'message',
}
