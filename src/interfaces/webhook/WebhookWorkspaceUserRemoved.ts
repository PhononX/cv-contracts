import { WebhookBasicUser } from './WebhookBasicUser';
import { WebhookWorkspace } from './WebhookWorkspace';

export interface WebhookWorkspaceUserRemoved {
  workspace: WebhookWorkspace;
  removedBy: WebhookBasicUser;
  removedUser: WebhookBasicUser;
}
