export interface ResponseByLanguage {
  language: string;

  json: Record<string, unknown>;

  text?: string;

  html?: string;

  markdown?: string;
}
