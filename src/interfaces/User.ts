export interface User {
  _id: string;
  self_link: string;
  first_name: string;
  last_name?: string;
  full_name: string;
  image_url?: string;
  created_at: Date;
  phones?: string[];
  emails?: string[];
  languages?: string[];
}
