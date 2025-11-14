import { AttachmentType } from '../../enums';

export interface AttachmentV5 {
  id: string;

  creator_id: string;

  created_at: string;

  type: AttachmentType;

  url: string;

  presigned_url?: string | null;

  presigned_url_expiration_date?: string | null;

  filename?: string | null;

  mime_type?: string | null;

  length_in_bytes?: number | null;
}
