export const WebhookPayloadSchema = {
  type: 'object',
  properties: {
    eventName: {
      $ref: '#/definitions/SubscriptionEvents',
      description: 'The event name that happened',
    },
    subscribedUserIds: {
      description: 'List of userIds that are subscribed  to the event',
      type: 'array',
      items: {
        type: 'string',
      },
    },
    subscribedUserSettings: {
      description: 'List of subscribed users settings',
      type: 'array',
      items: {
        $ref: '#/definitions/SubscribedUserSettings',
      },
    },
    data: {
      type: 'object',
      properties: {
        eventName: {
          $ref: '#/definitions/SubscriptionEvents',
          description: 'The event name that happened',
        },
        resourceId: {
          description: 'The resource id e.g: MessageId, ChannelId, WorkspaceId',
          type: 'string',
        },
        resourceType: {
          $ref: '#/definitions/ResourceType',
          description: 'The type of the resource',
        },
        resource: {
          $ref: '#/definitions/Resource',
          description: 'The resource data, varies by event',
        },
      },
      additionalProperties: false,
      required: ['eventName', 'resource', 'resourceId', 'resourceType'],
    },
  },
  additionalProperties: false,
  required: ['data', 'eventName', 'subscribedUserIds'],
  definitions: {
    SubscriptionEvents: {
      type: 'string',
      enum: [
        'message.initializing',
        'message.started',
        'message.paused',
        'message.resumed',
        'message.offline',
        'message.processing',
        'message.finished',
        'message.deleted',
        'message.discussion-notes.added',
        'message.label.added',
        'message.posted.to.channel',
        'message.voicememo.created',
        'channel.created',
        'channel.deleted',
        'channel.user.joined',
        'channel.users.added',
        'channel.user.left',
        'channel.user.removed',
        'channel.async-check.mid',
        'channel.async-check.ending',
        'channel.async.ended',
        'channel.async.extended',
        'channel.async.shortened',
        'channel.ai-summary.generated',
        'workspace.user.joined',
        'workspace.user.added',
        'workspace.user.left',
        'workspace.user.removed',
        'workspace.findable-channel.created',
        'access_token.expired',
        'refresh_token.expired',
        'ai.prompt.response.generated',
        'action-item.created',
        'action-item.updated',
        'action-item.deleted',
        'action-item.status.changed',
        'channel-reminder',
      ],
    },
    SubscribedUserSettings: {
      type: 'object',
      properties: {
        userId: {
          type: 'string',
        },
        defaultLanguage: {
          type: 'string',
        },
        timezone: {
          type: 'number',
        },
      },
      additionalProperties: false,
      required: ['userId'],
    },
    ResourceType: {
      type: 'string',
      enum: [
        'Message',
        'MessageLabelAdded',
        'Channel',
        'ChannelUsersAdded',
        'ChannelUserJoined',
        'ChannelUserRemoved',
        'ChannelUserLeft',
        'Workspace',
        'WorkspaceUserJoined',
        'WorkspaceUserAdded',
        'WorkspaceUserRemoved',
        'WorkspaceUserLeft',
        'WorkspaceFindableChannelCreated',
        'AIPromptResponseGenerated',
        'WorkspaceLevelAIPromptResponseGenerated',
        'WorkspaceLevelMessageLabelAdded',
        'ActionItem',
        'ChannelReminder',
      ],
    },
    Resource: {
      type: 'object',
      additionalProperties: false,
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum WebhookPayloadKeys {
  eventName = 'eventName',
  subscribedUserIds = 'subscribedUserIds',
  subscribedUserSettings = 'subscribedUserSettings',
  data = 'data',
}
