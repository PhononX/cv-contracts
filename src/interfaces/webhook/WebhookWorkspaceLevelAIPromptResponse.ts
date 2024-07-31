import { WebhookAIPromptResponse } from './WebhookAIPromptResponse';

import { GetMessageResponse } from '../GetMessageResponse';

export interface WebhookWorkspaceLevelAIPromptResponse {
  ai_response: WebhookAIPromptResponse;
  messages: GetMessageResponse[];
}
