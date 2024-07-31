import { GetMessageResponse } from '../GetMessageResponse';
import { Label } from '../Label';

export interface WebhookWorkspaceLevelLabelAddedToMessage {
  label: Label;
  message: GetMessageResponse;
}
