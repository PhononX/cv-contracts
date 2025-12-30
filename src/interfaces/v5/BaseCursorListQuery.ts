import { Direction } from '../../enums';

export interface BaseCursorListQuery {
  direction?: Direction;
  limit?: number;
  date?: string;
  starting_after?: string;
  ending_before?: string;
}
