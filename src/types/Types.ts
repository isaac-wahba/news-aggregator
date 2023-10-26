export interface Article {
  web_url: string;
  snippet: string;
  source: string;
  pub_date: string;
  author: string;
  title: string;
  category?: string;
}

export interface fetchArticlesResult {
  articles: Article[] | null;
}

export interface ArticlesFilters {
  category?: string;
  date?: string;
}

export interface NewsResource {
  id: number;
  label: string;
}

export interface MyPreferences {
  categories?: string[];
  authors?: string[];
  sources?: string[];
  date?: string;
}
