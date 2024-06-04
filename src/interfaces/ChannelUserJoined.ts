import { BasicUser } from './BasicUser';
import { Channel } from './Channel';

export interface ChannelUserJoined {
  channel: Channel;
  joinedUser: BasicUser;
}
