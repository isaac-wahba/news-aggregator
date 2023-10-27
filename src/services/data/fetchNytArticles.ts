import { nytUrl } from '../../apis/urls';
import { mapArticleToArticleType } from '../../helpers/mapNYTArticles';
import { Article } from '../../types/Types';
import { NYTResponseData } from '../../types/responses/NYTResponseTypes';

async function fetchNYTArticles(searchQuery: string): Promise<{
  articles: Article[] | null;
}> {
  const result: {
    articles: Article[] | null;
  } = {
    articles: null,
  };

  try {
    const fullUrl = `${nytUrl}?q=${searchQuery}&api-key=${process.env.REACT_APP_NYT_KEY}`;
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const responseData: NYTResponseData = await response.json();

    const mappedArticles: Article[] = responseData.response.docs.map(
      (article) => mapArticleToArticleType(article)
    );

    result.articles = mappedArticles.slice(0, 10);
  } catch (err) {
    console.log(err);
  }

  return result;
}

export default fetchNYTArticles;
