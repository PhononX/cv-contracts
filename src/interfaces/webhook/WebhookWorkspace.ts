export interface WebhookWorkspace {
  /**
   * @deprecated May be removed after 2026-11-01. Use `id` instead.
   */
  workspace_guid: string;
  /** Preferred workspace identifier. Same type and optionality as `workspace_guid`. */
  id: string;
  /**
   * @deprecated May be removed after 2026-11-01. Use `name` instead.
   */
  workspace_name: string;
  /** Preferred workspace display name. Same type and optionality as `workspace_name`. */
  name: string;
  /**
   * @deprecated May be removed after 2026-11-01. Use `description` instead.
   */
  workspace_description?: string | null;
  /** Preferred workspace description. Same type and optionality as `workspace_description`. */
  description?: string | null;
  image_url?: string | null;
  /**
   * @deprecated May be removed after 2026-11-01. Use `creator_id` instead.
   */
  owner_guid: string;
  /** Preferred owner/creator user identifier. Same type and optionality as `owner_guid`. */
  creator_id: string;
  /**
   * @deprecated May be removed after 2026-11-01. Use `creator_first_name` instead.
   */
  owner_first_name: string;
  /** Preferred creator given name. Same type and optionality as `owner_first_name`. */
  creator_first_name: string;
  /**
   * @deprecated May be removed after 2026-11-01. Use `creator_last_name` instead.
   */
  owner_last_name: string;
  /** Preferred creator family name. Same type and optionality as `owner_last_name`. */
  creator_last_name: string;
  created_at: number;
  last_updated_at: number;
  deleted_at?: number | null;
}
