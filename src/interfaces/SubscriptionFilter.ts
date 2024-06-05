import { Operator } from '../enums';

export interface SubscriptionFilter {
  key: string;
  value: unknown;
  operator: Operator;
}
