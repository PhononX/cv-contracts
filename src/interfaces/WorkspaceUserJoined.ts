import { BasicUser } from './BasicUser';
import { Workspace } from './Workspace';

export interface WorkspaceUserJoined {
  workspace: Workspace;
  joinedUser: BasicUser;
}
