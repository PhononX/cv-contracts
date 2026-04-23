export interface WebhookBasicUser {
  /**
   * @deprecated May be removed after 2026-11-01. Use `id` instead.
   */
  user_guid: string;
  /** Preferred user identifier. Same type and optionality as `user_guid`. */
  id: string;
  first_name: string;
  last_name: string;
}
