import { Article } from '../types/Types';
import { NytArticle } from '../types/responses/NYTResponseTypes';

export const mapArticleToArticleType = (nytArticle: NytArticle): Article => {
  const author: string = `${nytArticle.byline?.person[0]?.firstname} ${
    nytArticle.byline?.person[0]?.middlename
      ? nytArticle.byline?.person[0]?.middlename
      : ''
  } ${nytArticle.byline?.person[0]?.lastname}`;

  const article: Article = {
    web_url: nytArticle.web_url,
    snippet: nytArticle.snippet,
    source: nytArticle.source,
    pub_date: nytArticle.pub_date,
    author: author,
    title: nytArticle.headline.main,
    category: 'Uncategorized',
  };

  return article;
};
