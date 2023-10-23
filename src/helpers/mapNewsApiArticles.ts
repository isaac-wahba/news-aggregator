import { Article } from '../types/Types';
import { NewsApiArticle } from '../types/responses/NewsAiTypes';

export const mapNewsApiArticle = (article: NewsApiArticle): Article => {
  const articleType: Article = {
    web_url: article.url,
    snippet: article.description,
    source: article.source.name,
    pub_date: article.publishedAt,
    author: article.author,
  };

  return articleType;
};
