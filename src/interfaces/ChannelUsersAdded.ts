import { BasicUser } from './BasicUser';
import { Channel } from './Channel';

export interface ChannelUsersAdded {
  channel: Channel;
  addedBy: BasicUser;
  addedUsers: BasicUser[];
}
