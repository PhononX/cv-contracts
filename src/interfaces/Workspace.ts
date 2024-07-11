export interface Workspace {
  id: string;
  name: string;
  description?: string | null;
  image_url?: string | null;
  owner_id: string;
  owner_first_name: string;
  owner_last_name: string;
  created_at: string;
  last_updated_at: string;
  deleted_at?: string | null;
}
