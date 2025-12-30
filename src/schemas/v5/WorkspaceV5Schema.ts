export const WorkspaceV5Schema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    description: {
      type: ['null', 'string'],
    },
    image_url: {
      type: ['null', 'string'],
    },
    type: {
      type: ['null', 'string'],
    },
    created_at: {
      type: 'string',
    },
    last_updated_at: {
      type: 'string',
    },
    owner_id: {
      type: ['null', 'string'],
    },
    creator_id: {
      type: ['null', 'string'],
    },
    plan_type: {
      type: ['null', 'string'],
    },
    phones: {
      anyOf: [
        {
          type: 'array',
          items: {
            $ref: '#/definitions/WorkspacePhoneV5',
          },
        },
        {
          type: 'null',
        },
      ],
    },
    background_color: {
      type: ['null', 'string'],
    },
    watermark_image_url: {
      type: ['null', 'string'],
    },
    conversation_default: {
      type: ['null', 'boolean'],
    },
    invitation_mode: {
      type: ['null', 'string'],
    },
    sso_email_domain: {
      type: ['null', 'string'],
    },
    scim_provider: {
      type: ['null', 'string'],
    },
    scim_connection_name: {
      type: ['null', 'string'],
    },
    is_retention_enabled: {
      type: ['null', 'boolean'],
    },
    retention_days: {
      type: ['null', 'number'],
    },
    who_can_change_conversation_retention: {
      anyOf: [
        {
          type: 'array',
          items: {
            $ref: '#/definitions/Role',
          },
        },
        {
          type: 'null',
        },
      ],
    },
    who_can_mark_messages_as_preserved: {
      anyOf: [
        {
          type: 'array',
          items: {
            $ref: '#/definitions/Role',
          },
        },
        {
          type: 'null',
        },
      ],
    },
    retention_days_async_meeting: {
      type: ['null', 'number'],
    },
    domain_referral_mode: {
      type: ['null', 'string'],
    },
    domain_referral_message: {
      type: ['null', 'string'],
    },
    domain_referral_title: {
      type: ['null', 'string'],
    },
    domains: {
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
  },
  additionalProperties: false,
  required: ['created_at', 'id', 'last_updated_at', 'name'],
  definitions: {
    WorkspacePhoneV5: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        phone: {
          type: 'string',
        },
        created_at: {
          type: 'string',
        },
        updated_at: {
          type: ['null', 'string'],
        },
      },
      additionalProperties: false,
      required: ['created_at', 'id', 'phone'],
    },
    Role: {
      type: 'string',
      enum: ['admin', 'owner', 'creator', 'member', 'guest'],
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum WorkspaceV5Keys {
  id = 'id',
  name = 'name',
  description = 'description',
  image_url = 'image_url',
  type = 'type',
  created_at = 'created_at',
  last_updated_at = 'last_updated_at',
  owner_id = 'owner_id',
  creator_id = 'creator_id',
  plan_type = 'plan_type',
  phones = 'phones',
  background_color = 'background_color',
  watermark_image_url = 'watermark_image_url',
  conversation_default = 'conversation_default',
  invitation_mode = 'invitation_mode',
  sso_email_domain = 'sso_email_domain',
  scim_provider = 'scim_provider',
  scim_connection_name = 'scim_connection_name',
  is_retention_enabled = 'is_retention_enabled',
  retention_days = 'retention_days',
  who_can_change_conversation_retention = 'who_can_change_conversation_retention',
  who_can_mark_messages_as_preserved = 'who_can_mark_messages_as_preserved',
  retention_days_async_meeting = 'retention_days_async_meeting',
  domain_referral_mode = 'domain_referral_mode',
  domain_referral_message = 'domain_referral_message',
  domain_referral_title = 'domain_referral_title',
  domains = 'domains',
}
