import { GetMessageResponse } from '../GetMessageResponse';
import { Label } from '../Label';

export interface WebhookLabelAddedToMessage {
  label: Label;
  message: GetMessageResponse;
}
