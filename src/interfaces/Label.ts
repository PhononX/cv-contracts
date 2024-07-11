import { LabelBehavior, LabelType } from '../enums';

export interface Label {
  id: string;

  name: string;

  behavior: LabelBehavior;

  type: LabelType;

  creator_guid: string;

  space_guid?: string | null;

  image_url?: string | null;

  automatic_playlist?: boolean;

  sort_order?: number;
}
