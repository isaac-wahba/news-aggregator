import { Article } from '../types/Types';
import { NewsApiArticle } from '../types/responses/NewsAiTypes';

export const mapNewsApiArticle = (newsApiArticle: NewsApiArticle): Article => {
  const article: Article = {
    web_url: newsApiArticle.url,
    snippet: newsApiArticle.description,
    source: newsApiArticle.source.name,
    pub_date: newsApiArticle.publishedAt,
    author: newsApiArticle.author,
    title: newsApiArticle.title,
  };

  return article;
};
