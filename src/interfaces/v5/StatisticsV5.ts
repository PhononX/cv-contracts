export interface NotifiedMessageStatistic {
  channel_id: string;
  notified_messages: number;
  oldest_notified_message_id: string | null;
}

export interface LabelStatistic {
  label_id: string;
  notified_messages: number;
  total_messages: number;
  oldest_notified_message_id: string | null;
}

export interface Statistics {
  notified_messages: NotifiedMessageStatistic[];
  label_statistics: LabelStatistic[];
}
