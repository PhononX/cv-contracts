import { AsyncMeetingStats } from './AsyncMeetingStats';

import { ChannelType, ChannelVisibility } from '../enums';

export interface Channel {
  channel_guid: string;
  channel_name: string;
  channel_description?: string | null;
  workspace_guid: string;
  workspace_name: string;
  workspace_image_url?: string | null;
  owner_guid: string;
  owner_first_name: string;
  owner_last_name: string;
  type: ChannelType;
  visibility: ChannelVisibility;
  total_messages: number;
  total_duration_ms: number;
  image_url?: string | null;
  is_private: boolean;
  is_async: boolean;
  async_stats?: AsyncMeetingStats | null;
  created_at: number;
  last_updated_at: number;
  deleted_at?: number | null;
}
