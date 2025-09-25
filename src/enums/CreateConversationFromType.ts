export enum CreateConversationMessageFromType {
  /**
   * @deprecated Use MessageId instead, will be removed in the future (2026-01-01).
   */
  PreRecorded = 'PreRecorded',
  NewMessage = 'NewMessage',
  Forward = 'Forward',
  /**
   * @description MessageId will be used for PreRecorded and VoiceMemo.
   */
  MessageId = 'MessageId',
}
