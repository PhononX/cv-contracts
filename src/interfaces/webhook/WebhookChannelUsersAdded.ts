import { WebhookBasicUser } from './WebhookBasicUser';
import { WebhookChannel } from './WebhookChannel';

export interface WebhookChannelUsersAdded {
  channel: WebhookChannel;
  addedBy: WebhookBasicUser;
  addedUsers: WebhookBasicUser[];
}
