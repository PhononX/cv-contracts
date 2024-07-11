import { WebhookBasicUser } from './WebhookBasicUser';
import { WebhookChannel } from './WebhookChannel';

export interface WebhookChannelUserJoined {
  channel: WebhookChannel;
  joinedUser: WebhookBasicUser;
}
