export interface NytArticle {
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  pub_date: string;
  byline: Byline;
  headline: { main: string };
  section_name: string;
}

interface Person {
  firstname: string;
  middlename: string | null;
  lastname: string;
}

interface Byline {
  original: string;
  person: Person[];
  organization: string | null;
}

export interface NYTResponseData {
  copyright: string;
  response: {
    docs: NytArticle[];
  };
}
