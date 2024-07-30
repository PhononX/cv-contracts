import { WebhookAIPromptResponse } from './WebhookAIPromptResponse';
import { WebhookMessage } from './WebhookMessage';

export interface WebhookWorkspaceLevelAIPromptResponse {
  ai_response: WebhookAIPromptResponse;
  messages: WebhookMessage[];
}
