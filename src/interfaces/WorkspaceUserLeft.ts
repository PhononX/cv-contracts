import { BasicUser } from './BasicUser';
import { Workspace } from './Workspace';

export interface WorkspaceUserLeft {
  workspace: Workspace;
  leftUser: BasicUser;
}
