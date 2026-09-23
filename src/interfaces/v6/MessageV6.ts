import {
  MessageCaughtUpStatus,
  MessageKind,
  MessageSource,
  MessageStatus,
  MessageType,
} from '../../enums';
import {
  AttachmentV5,
  MessageAIResponse,
  MessageTimeCode,
  ReactionSummary,
  UserNotAllowedReceiveNotifications,
  UtmData,
} from '../v5';

/** Content of a message in one language: audio plus transcript data. */
export interface MessageContent {
  id: string;
  ai_summary?: string | null;
  transcript?: string | null;
  time_codes?: MessageTimeCode[];
  is_original_language?: boolean | null;
  language?: string | null;
  presigned_url?: string | null;
  presigned_url_expiration_date?: string | null;
  url?: string | null;
  streaming_url?: string | null;
  duration_ms?: number | null;
  /** Waveform percentages encoded as a compressed string. */
  waveform_percentage?: string | null;
}

export interface MessageV6 {
  id: string;
  type: MessageType;
  kind?: MessageKind | null;
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
  conversation_id?: string | null;
  workspace_id: string;
  creator_id: string;
  status: MessageStatus;
  /** The id of the message or its parent.  If it's not equal to id then it's a reply. */
  thread_id: string;
  idempotency_key?: string | null;
  attachments?: AttachmentV5[];
  available_languages?: string[] | null;
  original_language?: string | null;
  ai_response_ids?: MessageAIResponse[];
  share_link_id?: string | null;
  link: string;
  folder_id?: string | null;
  utm_data?: UtmData | null;
  conversation_sequence?: number | null;
  source_message_id?: string | null;
  content?: MessageContent | null;
  users_caught_up?: MessageCaughtUpStatus | null;
  reaction_summary?: ReactionSummary | null;
  users_not_allowed_to_receive_notifications?:
  | UserNotAllowedReceiveNotifications[]
  | null;
  source?: MessageSource | null;
  source_value?: string | null;
  tagged_user_ids: string[];
  heard_ms?: number | null;
  label_ids?: string[] | null;
  notify?: boolean | null;
  notes?: string | null;
  last_heard_update?: string | null;
}
