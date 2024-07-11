export interface User {
  id: string;
  link: string;
  first_name: string;
  last_name?: string;
  full_name: string;
  image_url?: string;
  created_at: string;
  phones?: string[];
  emails?: string[];
  languages?: string[];
}
