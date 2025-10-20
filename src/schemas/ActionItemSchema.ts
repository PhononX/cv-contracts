export const ActionItemSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    status: {
      $ref: '#/definitions/ActionItemStatus',
    },
    title: {
      type: 'string',
    },
    notes_text: {
      type: 'string',
    },
    creator_id: {
      type: 'string',
    },
    last_updated_by: {
      type: 'string',
    },
    assigned_to: {
      type: 'string',
    },
    workspace_id: {
      type: 'string',
    },
    container_id: {
      type: 'string',
    },
    container_type: {
      enum: ['channel', 'folder', 'home'],
      type: 'string',
    },
    source_message_id: {
      type: 'string',
    },
    due_date: {
      type: 'string',
      format: 'date-time',
    },
    created_at: {
      type: 'string',
      format: 'date-time',
    },
    updated_at: {
      type: 'string',
      format: 'date-time',
    },
    deleted_at: {
      type: 'string',
      format: 'date-time',
    },
  },
  additionalProperties: false,
  required: [
    'created_at',
    'creator_id',
    'id',
    'last_updated_by',
    'status',
    'title',
    'updated_at',
    'workspace_id',
  ],
  definitions: {
    ActionItemStatus: {
      type: 'string',
      enum: ['suggested', 'todo', 'done'],
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
};

export enum ActionItemKeys {
  id = 'id',
  status = 'status',
  title = 'title',
  notes_text = 'notes_text',
  creator_id = 'creator_id',
  last_updated_by = 'last_updated_by',
  assigned_to = 'assigned_to',
  workspace_id = 'workspace_id',
  container_id = 'container_id',
  container_type = 'container_type',
  source_message_id = 'source_message_id',
  due_date = 'due_date',
  created_at = 'created_at',
  updated_at = 'updated_at',
  deleted_at = 'deleted_at',
}
