import { Article } from '../types/Types';
import { NytArticle } from '../types/responses/NYTResponseTypes';

export const mapArticleToArticleType = (article: NytArticle): Article => {
  const author: string = `${article.byline?.person[0]?.firstname} ${
    article.byline?.person[0]?.middlename
      ? article.byline?.person[0]?.middlename
      : ''
  } ${article.byline?.person[0]?.lastname}`;

  const articleType: Article = {
    web_url: article.web_url,
    snippet: article.snippet,
    source: article.source,
    pub_date: article.pub_date,
    author: author,
  };

  return articleType;
};
