export interface AsyncMeetingStats {
  channel_stats: {
    total_duration_milliseconds: number;
    total_heard_milliseconds: number;
    total_engaged_percentage: number;
    total_messages_posted: number;
    total_users: number;
  };
  user_stats: {
    user_id: string;
    total_messages_posted: number;
    total_sent_milliseconds: number;
    total_heard_milliseconds: number;
    total_engaged_percentage: number;
    total_heard_messages: number;
    total_unheard_messages: number;
  }[];
}
