import { SubscribedUserSettings } from './SubscribedUserSettings';

import { SubscriptionEvents } from '../enums';
import { ResourceType } from '../enums/ResourceType';

export interface WebhookPayload<Resource> {
  /**
   * The event name that happened
   */
  eventName: SubscriptionEvents;
  /**
   * List of userIds that are subscribed  to the event
   */
  subscribedUserIds: string[];
  /**
   * List of subscribed users settings
   */
  subscribedUserSettings?: SubscribedUserSettings[];
  data: {
    /**
     * The event name that happened
     */
    eventName: SubscriptionEvents;
    /**
     * The resource id e.g: MessageId, ChannelId, WorkspaceId
     */
    resourceId: string; // unique ID for the resource
    /**
     * The type of the resource
     */
    resourceType: ResourceType; // Message | Channel | ChannelUserLeft...
    /**
     * The resource data, varies by event
     */
    resource: Resource;
  };
}
