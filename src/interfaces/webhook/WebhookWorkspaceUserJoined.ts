import { WebhookBasicUser } from './WebhookBasicUser';
import { WebhookWorkspace } from './WebhookWorkspace';

export interface WebhookWorkspaceUserJoined {
  workspace: WebhookWorkspace;
  joinedUser: WebhookBasicUser;
}
