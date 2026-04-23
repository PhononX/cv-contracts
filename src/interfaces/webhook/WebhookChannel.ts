import { WebhookAsyncMeetingStats } from './WebhookAsyncMeetingStats';

import { ChannelType, ChannelVisibility } from '../../enums/webhook';

export interface WebhookChannel {
  /**
   * @deprecated May be removed after 2026-11-01. Use `id` instead.
   */
  channel_guid: string;
  /** Preferred channel identifier. Same type and optionality as `channel_guid`. */
  id: string;
  self_link: string;
  /**
   * @deprecated May be removed after 2026-11-01. Use `name` instead.
   */
  channel_name: string;
  /** Preferred channel display name. Same type and optionality as `channel_name`. */
  name: string;
  /**
   * @deprecated May be removed after 2026-11-01. Use `description` instead.
   */
  channel_description?: string | null;
  /** Preferred channel description. Same type and optionality as `channel_description`. */
  description?: string | null;
  /**
   * @deprecated May be removed after 2026-11-01. Use `workspace_id` instead.
   */
  workspace_guid: string;
  /** Preferred workspace identifier. Same type and optionality as `workspace_guid`. */
  workspace_id: string;
  workspace_name: string;
  workspace_image_url?: string | null;
  /**
   * @deprecated May be removed after 2026-11-01. Use `creator_id` instead.
   */
  owner_guid: string;
  /** Preferred channel creator identifier. Same type and optionality as `owner_guid`. */
  creator_id: string;
  type: ChannelType;
  visibility: ChannelVisibility;
  total_messages: number;
  total_duration_ms: number;
  image_url?: string | null;
  is_private: boolean;
  is_async: boolean;
  async_stats?: WebhookAsyncMeetingStats | null;
  created_at: string;
  last_updated_at: string;
  deleted_at?: string;
}
