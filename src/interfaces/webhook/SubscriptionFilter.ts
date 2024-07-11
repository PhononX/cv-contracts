import { Operator } from '../../enums/webhook';

export interface SubscriptionFilter {
  key: string;
  value: unknown;
  operator: Operator;
}
