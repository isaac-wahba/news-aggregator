import { newsApi, newsUrl } from '../../apis/keys';
import { mapNewsApiArticle } from '../../helpers/mapNewsApiArticles';
import { Article } from '../../types/Types';
import {
  NewsApiArticle,
  NewsApiResponse,
} from '../../types/responses/NewsAiTypes';

async function fetchNewsApiArticles(searchQuery: string): Promise<{
  articles: Article[] | null;
}> {
  const fullUrl = `${newsUrl}?q=${searchQuery}&apiKey=${newsApi}`;

  const result: {
    articles: Article[] | null;
  } = {
    articles: null,
  };

  try {
    const response = await fetch(fullUrl);
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const responseData: NewsApiResponse = await response.json();

    const mappedArticles: Article[] = responseData.articles.map(
      (article: NewsApiArticle) => mapNewsApiArticle(article)
    );
    result.articles = mappedArticles.slice(0, 10);
  } catch (err) {
    console.log(err);
  }
  return result;
}

export default fetchNewsApiArticles;
