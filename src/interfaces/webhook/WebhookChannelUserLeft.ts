import { WebhookBasicUser } from './WebhookBasicUser';
import { WebhookChannel } from './WebhookChannel';

export interface WebhookChannelUserLeft {
  channel: WebhookChannel;
  leftUser: WebhookBasicUser;
}
