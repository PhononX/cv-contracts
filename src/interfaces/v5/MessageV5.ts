import { AttachmentV5 } from './AttachmentV5';

import {
  MessageCaughtUpStatus,
  MessageKind,
  MessageStatus,
  MessageType,
} from '../../enums';

export interface MessageAIResponse {
  id: string;
  prompt_id: string;
}

export interface MessageTimeCode {
  t: string;
  s: number;
  e: number;
}

export interface UtmData {
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
}

export interface UserReaction {
  user_id: string;
  reaction_id: string;
}

export interface ReactionCounts {
  [reaction_id: string]: number;
}

export interface ReactionSummary {
  reaction_counts: ReactionCounts;
  top_user_reactions: UserReaction[];
}

export interface UserNotAllowedReceiveNotifications {
  user_id: string;
  phone?: string;
  email?: string;
}

export interface AudioInfo {
  url?: string | null;
  streaming_url?: string | null;
  presigned_url?: string | null;
  presigned_url_expiration_date?: string | null;
  duration_ms?: number | null;
}

export interface MessageV5 {
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
  parent_message_id?: string | null;
  attachments?: AttachmentV5[];
  language?: string | null;
  is_original_language?: boolean | null;
  transcript?: string | null;
  ai_summary?: string | null;
  ai_response_ids?: MessageAIResponse[];
  share_link_id?: string | null;
  link: string;
  time_codes?: MessageTimeCode[];
  waveform_percentages?: number[];
  folder_id?: string | null;
  utm_data?: UtmData | null;
  conversation_sequence?: number | null;
  source_message_id?: string | null;
  audio?: AudioInfo | null;
  users_caught_up?: MessageCaughtUpStatus | null;
  reaction_summary?: ReactionSummary | null;
  users_not_allowed_to_receive_notifications?:
    | UserNotAllowedReceiveNotifications[]
    | null;
}
