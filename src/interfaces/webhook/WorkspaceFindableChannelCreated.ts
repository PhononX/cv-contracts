import { WebhookChannel } from './WebhookChannel';
import { WebhookWorkspace } from './WebhookWorkspace';

export interface WebhookWorkspaceFindableChannelCreated {
  channel: WebhookChannel;
  workspace: WebhookWorkspace;
}
