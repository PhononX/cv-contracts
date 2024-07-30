export const WebhookWorkspaceLevelAIPromptResponseSchema = {
  type: 'object',
  properties: {
    ai_response: {
      $ref: '#/definitions/WebhookAIPromptResponse',
    },
    messages: {
      type: 'array',
      items: {
        $ref: '#/definitions/WebhookMessage',
      },
    },
  },
  additionalProperties: false,
  required: ['ai_response', 'messages'],
  definitions: {
    WebhookAIPromptResponse: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        creator_id: {
          type: 'string',
        },
        prompt_id: {
          type: 'string',
        },
        created_at: {
          type: 'string',
        },
        last_updated_at: {
          type: 'string',
        },
        responses: {
          $ref: '#/definitions/Record<string,string>',
        },
        response_format: {
          $ref: '#/definitions/AIResponseFormat',
        },
        message_ids: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        workspace_id: {
          type: 'string',
        },
        channel_id: {
          type: 'string',
        },
      },
      additionalProperties: false,
      required: [
        'created_at',
        'creator_id',
        'id',
        'last_updated_at',
        'message_ids',
        'prompt_id',
        'response_format',
        'responses',
      ],
    },
    'Record<string,string>': {
      type: 'object',
      additionalProperties: false,
    },
    AIResponseFormat: {
      type: 'string',
      enum: ['text', 'json'],
    },
    WebhookMessage: {
      type: 'object',
      properties: {
        message_guid: {
          type: 'string',
        },
        self_link: {
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
        attachments: {
          type: 'array',
          items: {
            $ref: '#/definitions/Attachment',
          },
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
        'self_link',
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
      enum: ['link', 'file', 'location'],
    },
    MessageType: {
      type: 'string',
      enum: ['channel', 'prerecorded', 'voicememo', 'stored', 'welcome'],
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum WebhookWorkspaceLevelAIPromptResponseKeys {
  ai_response = 'ai_response',
  messages = 'messages',
}
