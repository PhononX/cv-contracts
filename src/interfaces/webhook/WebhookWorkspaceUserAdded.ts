import { WebhookBasicUser } from './WebhookBasicUser';
import { WebhookWorkspace } from './WebhookWorkspace';

export interface WebhookWorkspaceUserAdded {
  workspace: WebhookWorkspace;
  addedUser: WebhookBasicUser;
}
