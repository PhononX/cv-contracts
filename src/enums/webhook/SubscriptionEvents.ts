export enum SubscriptionEvents {
  /** Messages */
  MESSAGE_INITIALIZING = 'message.initializing',
  MESSAGE_STARTED = 'message.started',
  MESSAGE_PAUSED = 'message.paused',
  MESSAGE_RESUMED = 'message.resumed',
  MESSAGE_OFFLINE = 'message.offline',
  MESSAGE_PROCESSING = 'message.processing',
  MESSAGE_FINISHED = 'message.finished',
  MESSAGE_DELETED = 'message.deleted',
  MESSAGE_DISCUSSION_NOTES_ADDED = 'message.discussion-notes.added',
  MESSAGE_LABEL_ADDED = 'message.label.added',
  MESSAGE_POSTED_TO_CHANNEL = 'message.posted.to.channel',
  MESSAGE_VOICEMEMO_CREATED = 'message.voicememo.created',

  /** Channels */
  CHANNEL_CREATED = 'channel.created',
  CHANNEL_DELETED = 'channel.deleted',
  CHANNEL_USER_JOINED = 'channel.user.joined',
  CHANNEL_USERS_ADDED = 'channel.users.added',
  CHANNEL_USER_LEFT = 'channel.user.left',
  CHANNEL_USER_REMOVED = 'channel.user.removed',
  CHANNEL_ASYNC_CHECK_MID = 'channel.async-check.mid',
  CHANNEL_ASYNC_CHECK_ENDING = 'channel.async-check.ending',
  CHANNEL_ASYNC_ENDED = 'channel.async.ended',
  CHANNEL_ASYNC_EXTENDED = 'channel.async.extended',
  CHANNEL_ASYNC_SHORTENED = 'channel.async.shortened',
  CHANNEL_AI_SUMMARY_GENERATED = 'channel.ai-summary.generated',

  /** Workspace */
  WORKSPACE_USER_JOINED = 'workspace.user.joined',
  WORKSPACE_USER_ADDED = 'workspace.user.added',
  WORKSPACE_USER_LEFT = 'workspace.user.left',
  WORKSPACE_USER_REMOVED = 'workspace.user.removed',
  WORKSPACE_FINDABLE_CHANNEL_CREATED = 'workspace.findable-channel.created',

  // Webhooks Events, users don't need to subscribe, every user that is subscribed to any event could get one of.
  WEBHOOK_ACCESS_TOKEN_EXPIRED = 'access_token.expired',
  WEBHOOK_REFRESH_TOKEN_EXPIRED = 'refresh_token.expired',

  // AI Events
  AI_PROMPT_RESPONSE_GENERATED = 'ai.prompt.response.generated',
}
