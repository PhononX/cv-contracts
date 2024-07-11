import { WebhookBasicUser } from './WebhookBasicUser';
import { WebhookWorkspace } from './WebhookWorkspace';

export interface WebhookWorkspaceUserLeft {
  workspace: WebhookWorkspace;
  leftUser: WebhookBasicUser;
}
