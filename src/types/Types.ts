export interface Article {
  web_url: string;
  snippet: string;
  source: string;
  pub_date: string;
  author: string;
  title: string;
}

export interface fetchArticlesResult {
  articles: Article[] | null;
}
