import { ResponseByLanguage } from './ResponseByLanguage';

export interface AIShareLinkPromptResponse {
  id: string;

  creator_id: string;

  prompt_id: string;

  created_at: string;

  last_updated_at: string;

  responses: ResponseByLanguage[];

  share_link_ids: string[];
}
