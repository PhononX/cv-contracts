import { Attachment } from './Attachment';

import { MessageKind, MessageStatus, MessageType } from '../enums';

export interface Message {
  id: string;
  name?: string | null;
  link: string;
  creator_id: string;
  conversation_id?: string | null;
  workspace_id?: string | null;
  created_at: string;
  last_updated_at: string;
  deleted_at?: string | null;
  duration_ms: number;
  audio_url?: string | null;
  audio_stream_url?: string | null;
  transcript?: string | null;
  ai_summary?: string | null;
  has_ai_summary?: boolean;
  waveform_url?: string | null;
  reply_count: number;
  parent_message_id?: string | null;
  language?: string | null;
  status: MessageStatus;
  attachments?: Attachment[];
  type: MessageType;
  kind?: MessageKind | null;
  share_link_id?: string;
}
