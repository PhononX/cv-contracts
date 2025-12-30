import { BaseCursorListQuery } from './BaseCursorListQuery';

export interface CursorListResponseV5<T, F = BaseCursorListQuery> {
  has_more: boolean;
  next_cursor?: string | null;
  total?: number | null;
  results: T[];
  filters?: F | null;
}
