export interface CursorListResponseV5<T> {
  results: T[];
  next_cursor?: string | null;
  has_more: boolean;
  total?: number | null;
}
