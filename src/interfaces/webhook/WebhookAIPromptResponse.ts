import { AIResponseFormat } from '../../enums';

export interface WebhookAIPromptResponse {
  id: string;

  creator_id: string;

  prompt_id: string;

  created_at: string;

  last_updated_at: string;

  responses: Record<string, string>;

  response_format: AIResponseFormat;

  message_ids: string[];

  workspace_id?: string;

  channel_id?: string;
}
