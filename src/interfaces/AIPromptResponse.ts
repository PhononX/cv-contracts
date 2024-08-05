import { ResponseByLanguage } from './ResponseByLanguage';

export interface AIPromptResponse {
  id: string;

  creator_id: string;

  prompt_id: string;

  created_at: string;

  last_updated_at: string;

  responses: ResponseByLanguage[];

  message_ids: string[];

  workspace_id?: string;

  channel_id?: string;
}
