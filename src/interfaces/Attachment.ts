import { AttachmentType } from '../enums';

export interface Attachment {
  id: string;

  creator_id: string;

  created_at: string;

  type: AttachmentType;

  link: string;

  active_begin?: string | null;

  active_end?: string | null;

  filename?: string | null;

  mime_type?: string | null;

  length_in_bytes?: number | null;

  location?: unknown | null;
}
