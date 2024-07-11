import { WebhookBasicUser } from './WebhookBasicUser';
import { WebhookChannel } from './WebhookChannel';

export interface WebhookChannelUserRemoved {
  channel: WebhookChannel;
  removedBy: WebhookBasicUser;
  removedUser: WebhookBasicUser;
}
