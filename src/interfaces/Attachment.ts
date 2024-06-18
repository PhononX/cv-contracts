import { AttachmentType } from '../enums';

export interface Attachment {
  _id: string;

  creator_id: string;

  created_at: Date;

  type: AttachmentType;

  link: string;

  active_begin?: Date | null;

  active_end?: Date | null;

  filename?: string | null;

  mime_type?: string | null;

  length_in_bytes?: number | null;

  location: unknown | null;
}
