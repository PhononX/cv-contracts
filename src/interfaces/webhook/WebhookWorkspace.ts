export interface WebhookWorkspace {
  workspace_guid: string;
  workspace_name: string;
  workspace_description?: string | null;
  image_url?: string | null;
  owner_guid: string;
  owner_first_name: string;
  owner_last_name: string;
  created_at: string;
  last_updated_at: string;
  deleted_at?: string | null;
}
