import { ActionItemContainerType, ActionItemStatus } from '../enums';

export interface ActionItem {
  id: string;
  status: ActionItemStatus;
  title: string;
  notes_text?: string;
  creator_id: string;
  last_updated_by: string;
  assigned_to?: string;
  workspace_id: string;
  container_id?: string;
  container_type?: ActionItemContainerType;
  source_message_id?: string;
  due_date?: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}
