import { Article } from '../types/Types';
import { TheGuardianArticle } from '../types/responses/TheGardianResponseTypes';
import { formatDate } from '../utils/formatDate';

export const mapTheGardianArticle = (
  theGardianArticle: TheGuardianArticle
): Article => {
  const article: Article = {
    web_url: theGardianArticle.webUrl,
    body: theGardianArticle.fields.bodyText,
    snippet: theGardianArticle.fields.bodyText.slice(0, 200) + '...',
    source: 'The Guardian',
    pub_date: formatDate(new Date(theGardianArticle.webPublicationDate)),
    author: theGardianArticle.fields.byline,
    title: theGardianArticle.fields.headline,
    category: theGardianArticle.sectionName,
  };

  return article;
};
