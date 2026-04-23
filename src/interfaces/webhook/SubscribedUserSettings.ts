export interface SubscribedUserSettings {
  /**
   * @deprecated May be removed after 2026-11-01. Use `user_id` instead.
   */
  userId: string;
  /** Preferred user identifier. Same type and optionality as `userId`. */
  user_id: string;
  defaultLanguage?: string;
  timezone?: number;
}
