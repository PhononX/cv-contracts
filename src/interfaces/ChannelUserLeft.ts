import { BasicUser } from './BasicUser';
import { Channel } from './Channel';

export interface ChannelUserLeft {
  channel: Channel;
  leftUser: BasicUser;
}
