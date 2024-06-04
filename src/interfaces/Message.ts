import { MessageStatus } from '../enums';
import { MessageType } from '../enums/MessageType';

export interface Message {
  message_guid: string;
  creator_guid: string;
  channel_guid?: string | null;
  workspace_guid?: string | null;
  creator_first_name: string;
  creator_last_name: string;
  created_at: number;
  last_updated_at: number;
  deleted_at?: number | null;
  duration_ms: number;
  message_url?: string | null;
  audio_stream_url?: string | null;
  transcript_txt?: string | null;
  ai_summary_txt?: string | null;
  has_ai_summary?: boolean;
  waveform_url?: string | null;
  reply_count: number;
  parent_message_guid?: string | null;
  language?: string | null;
  status: MessageStatus;
  type: MessageType;
}
