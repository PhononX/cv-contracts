import { Conversation } from './Conversation';
import { Label } from './Label';
import { Message } from './Message';
import { User } from './User';

export interface GetMessageResponse {
  message: Message;
  creator?: User;
  conversation?: Conversation;
  labels?: Label[];
}
