import { BasicUser } from './BasicUser';
import { Channel } from './Channel';

export interface ChannelUserRemoved {
  channel: Channel;
  removedBy: BasicUser;
  removedUser: BasicUser;
}
