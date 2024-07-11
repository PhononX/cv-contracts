# cv-contracts

## Project Overview
This repository contains a collection of TypeScript interfaces and enums that are used to model various entities and events with [Carbon Voice API](https://api.carbonvoice.app/v2/docs/#/). These entities include users, channels, workspaces, and messages, among others.

The primary idea is to have a centralized place for webhook communication with [Carbon Voice API](https://api.carbonvoice.app/v2/docs/#/)

## Usage example:

## Install library
```bash
npm i cv-contracts
```

## Import respective contract
```ts
import { Message, Conversation } from 'cv-contracts';

const msg: Message = {
  id: string;
  link: string;
  creator_id: string;
  conversation_id?: string | null;
  workspace_id?: string | null;
  created_at: string;
  last_updated_at: string;
  deleted_at?: string | null;
  duration_ms: number;
  audio_url?: string | null;
  audio_stream_url?: string | null;
  transcript?: string | null;
  ai_summary?: string | null;
  has_ai_summary?: boolean;
  waveform_url?: string | null;
  reply_count: number;
  parent_message_id?: string | null;
  language?: string | null;
  status: MessageStatus;
  attachments?: Attachment[];
  type: MessageType;
}
 const conversation: Conversation = {
    id: string;
    link: string;
    name: string;
    description?: string | null;
    workspace_id: string;
    workspace_name: string;
    workspace_image_url?: string | null;
    owner_id: string;
    type: ChannelType;
    visibility: ChannelVisibility;
    total_messages: number;
    total_duration_ms: number;
    image_url?: string | null;
    is_private: boolean;
    is_async: boolean;
    async_stats?: AsyncMeetingStats | null;
    created_at: string;
    last_updated_at: string;
    deleted_at?: string;
 }
```
