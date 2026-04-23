import { MessageKind, MessageStatus } from '../../enums';
import { MessageType } from '../../enums/MessageType';
import { Attachment } from '../Attachment';

export interface WebhookMessage {
  /**
   * @deprecated May be removed after 2026-11-01. Use `id` instead.
   */
  message_guid: string;
  /** Preferred message identifier. Same type and optionality as `message_guid`. */
  id: string;
  self_link: string;
  /**
   * @deprecated May be removed after 2026-11-01. Use `creator_id` instead.
   */
  creator_guid: string;
  /** Preferred creator user identifier. Same type and optionality as `creator_guid`. */
  creator_id: string;
  /**
   * @deprecated May be removed after 2026-11-01. Use `channel_id` instead.
   */
  channel_guid?: string | null;
  /** Preferred channel identifier. Same type and optionality as `channel_guid`. */
  channel_id?: string | null;
  /**
   * @deprecated May be removed after 2026-11-01. Use `workspace_id` instead.
   */
  workspace_guid?: string | null;
  /** Preferred workspace identifier. Same type and optionality as `workspace_guid`. */
  workspace_id?: string | null;
  created_at: string;
  last_updated_at: string;
  deleted_at?: string | null;
  duration_ms: number;
  message_url?: string | null;
  audio_stream_url?: string | null;
  transcript_txt?: string | null;
  ai_summary_txt?: string | null;
  has_ai_summary?: boolean;
  waveform_url?: string | null;
  reply_count: number;
  /**
   * @deprecated May be removed after 2026-11-01. Use `parent_message_id` instead.
   */
  parent_message_guid?: string | null;
  /** Preferred parent message identifier. Same type and optionality as `parent_message_guid`. */
  parent_message_id?: string | null;
  language?: string | null;
  status: MessageStatus;
  attachments?: Attachment[];
  type: MessageType;
  kind?: MessageKind | null;
  share_link_id?: string | null;
  folder_id?: string | null;
}
