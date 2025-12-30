import { WorkspacePhoneV5 } from './WorkspacePhoneV5';

import { Role } from '../../enums';

// These enums are referenced but may need to be defined elsewhere
// or created in the enums folder
export type WorkspaceType = string;
export type PlanType = string;
export type InvitationMode = string;
export type DomainReferralMode = string;

export interface WorkspaceV5 {
  id: string;
  name: string;
  description?: string | null;
  image_url?: string | null;
  type?: WorkspaceType | null;
  created_at: string;
  last_updated_at: string;
  owner_id?: string | null;
  creator_id?: string | null;
  plan_type?: PlanType | null;
  phones?: WorkspacePhoneV5[] | null;
  background_color?: string | null;
  watermark_image_url?: string | null;
  conversation_default?: boolean | null;
  invitation_mode?: InvitationMode | null;
  sso_email_domain?: string | null;
  scim_provider?: string | null;
  scim_connection_name?: string | null;
  is_retention_enabled?: boolean | null;
  retention_days?: number | null;
  who_can_change_conversation_retention?: Role[] | null;
  who_can_mark_messages_as_preserved?: Role[] | null;
  retention_days_async_meeting?: number | null;
  domain_referral_mode?: DomainReferralMode | null;
  domain_referral_message?: string | null;
  domain_referral_title?: string | null;
  domains?: string[] | null;
}
