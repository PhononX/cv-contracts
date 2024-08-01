import { AIPromptResponse } from '../AIPromptResponse';
import { GetMessageResponse } from '../GetMessageResponse';

export interface WebhookAIPromptResponseGenerated {
  ai_response: AIPromptResponse;
  messages: GetMessageResponse[];
}
