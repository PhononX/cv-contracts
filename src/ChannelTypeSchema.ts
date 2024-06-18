export const ChannelTypeSchema = {
  type: 'string',
  enum: [
    'directMessage',
    'customerConversation',
    'namedConversation',
    'asyncMeeting',
  ],
  $schema: 'http://json-schema.org/draft-07/schema#',
} as const;
