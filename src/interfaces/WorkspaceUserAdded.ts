import { BasicUser } from './BasicUser';
import { Workspace } from './Workspace';

export interface WorkspaceUserAdded {
  workspace: Workspace;
  addedUser: BasicUser;
}
