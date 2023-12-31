import { guardianUrl } from '../../apis/urls';
import { mapTheGardianArticle } from '../../helpers/mapTheGardianArticles';
import { Article } from '../../types/Types';
import { GuardianResponse } from '../../types/responses/TheGardianResponseTypes';

async function fetchTheGardianArticles(searchQuery: string): Promise<{
  articles: Article[] | null;
}> {
  const result: {
    articles: Article[] | null;
  } = {
    articles: null,
  };

  try {
    const fullUrl = `${guardianUrl}?q=${searchQuery}&show-fields=headline,bodyText,byline&api-key=${process.env.REACT_APP_GARDIAN_KEY}`;
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const responseData: GuardianResponse = await response.json();

    const mappedArticles: Article[] = responseData.response.results.map(
      (article) => mapTheGardianArticle(article)
    );

    result.articles = mappedArticles.slice(0, 10);
  } catch (err) {
    throw err;
  }

  return result;
}

export default fetchTheGardianArticles;
