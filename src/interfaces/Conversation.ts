import { AsyncMeetingStats } from './AsyncMeetingStats';

import { ChannelType, ChannelVisibility } from '../enums/webhook';

export interface Conversation {
  id: string;
  link: string;
  name: string;
  description?: string | null;
  workspace_id: string;
  workspace_name: string;
  workspace_image_url?: string | null;
  owner_id: string;
  type: ChannelType;
  visibility: ChannelVisibility;
  total_messages: number;
  total_duration_ms: number;
  image_url?: string | null;
  is_private: boolean;
  is_async: boolean;
  async_stats?: AsyncMeetingStats | null;
  created_at: string;
  last_updated_at: string;
  deleted_at?: string;
}
