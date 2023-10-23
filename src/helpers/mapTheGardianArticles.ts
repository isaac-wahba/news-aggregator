import { Article } from '../types/Types';
import { TheGuardianArticle } from '../types/responses/TheGardianResponseTypes';

export const mapTheGardianArticle = (
  theGardianArticle: TheGuardianArticle
): Article => {
  const article: Article = {
    web_url: theGardianArticle.webUrl,
    snippet: theGardianArticle.fields.bodyText,
    source: 'The Guardian',
    pub_date: theGardianArticle.webPublicationDate,
    author: theGardianArticle.fields.byline,
    title: theGardianArticle.fields.headline,
    category: theGardianArticle.sectionName,
  };

  return article;
};
