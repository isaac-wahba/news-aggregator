import { ArticleType } from '../types/Types';
import { Article } from '../types/responses/NYTResponseTypes';

export const mapArticleToArticleType = (article: Article): ArticleType => {
  // Extract data from the Article object and map it to ArticleType
  const author: string = `${article.byline?.person[0]?.firstname} ${
    article.byline?.person[0]?.middlename
      ? article.byline?.person[0]?.middlename
      : ''
  } ${article.byline?.person[0]?.lastname}`;

  // You might want to handle cases where the author data is missing more gracefully.

  const articleType: ArticleType = {
    web_url: article.web_url,
    snippet: article.snippet,
    source: article.source,
    pub_date: article.pub_date,
    author: author,
  };

  return articleType;
};

// // Example usage:
// const articles: Article[] = /* Your list of Article objects */;
// const mappedArticles: ArticleType[] = articles.map((article) => mapArticleToArticleType(article));
