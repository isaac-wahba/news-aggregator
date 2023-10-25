import { unknownAuthor } from '../constants/mappingConstants';
import { Article } from '../types/Types';
import { NewsApiArticle } from '../types/responses/NewsAiTypes';
import { formatDate } from '../utils/formatDate';

export const mapNewsApiArticle = (newsApiArticle: NewsApiArticle): Article => {
  const article: Article = {
    web_url: newsApiArticle.url,
    snippet: newsApiArticle.description,
    source: 'News Api',
    category: 'Uncategorized',
    pub_date: formatDate(new Date(newsApiArticle.publishedAt)),
    author: newsApiArticle.author ?? unknownAuthor,
    title: newsApiArticle.title,
  };

  return article;
};
