import { unknownAuthor } from '../constants/mappingConstants';
import { Article } from '../types/Types';
import { NytArticle } from '../types/responses/NYTResponseTypes';

export const mapArticleToArticleType = (nytArticle: NytArticle): Article => {
  const author: string =
    nytArticle.byline?.person.length > 0
      ? `${nytArticle.byline?.person[0]?.firstname} ${nytArticle.byline?.person[0]?.lastname}`
      : unknownAuthor;

  const article: Article = {
    web_url: nytArticle.web_url,
    snippet: nytArticle.snippet,
    source: nytArticle.source,
    pub_date: nytArticle.pub_date,
    author: author ?? unknownAuthor,
    title: nytArticle.headline.main,
    category: nytArticle.section_name,
  };

  return article;
};
