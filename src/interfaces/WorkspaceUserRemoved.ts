import { BasicUser } from './BasicUser';
import { Workspace } from './Workspace';

export interface WorkspaceUserRemoved {
  workspace: Workspace;
  removedBy: BasicUser;
  removedUser: BasicUser;
}
