import { Message } from './Message';

import { AccessType, ShareType, SpecifiedAccessType } from '../enums';

export interface SpecifiedAccess {
  type: SpecifiedAccessType;
  ids: string[];
}

export interface MessageShareLink {
  id: string;
  link: string;
  created_by: string;
  message_id?: string | null;
  conversation_id?: string | null;
  created_at: string;
  last_updated_at: string;
  end_access_at?: string | null;
  revoked_at?: string | null;
  revoked_by?: string | null;
  share_type: ShareType;
  access_type: AccessType;
  specified_access?: SpecifiedAccess[] | null;
  shared_message: Message;
}
