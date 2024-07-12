import { WebhookAsyncMeetingStats } from './WebhookAsyncMeetingStats';

import { ChannelType, ChannelVisibility } from '../../enums/webhook';

export interface WebhookChannel {
  channel_guid: string;
  self_link: string;
  channel_name: string;
  channel_description?: string | null;
  workspace_guid: string;
  workspace_name: string;
  workspace_image_url?: string | null;
  owner_guid: string;
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
