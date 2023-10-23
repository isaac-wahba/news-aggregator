import { useEffect, useState } from 'react';
import { newsApi, newsUrl } from '../apis/keys';
import { Article } from '../types/Types';
import {
  NewsApiArticle,
  NewsApiResponse,
} from '../types/responses/NewsAiTypes';
import { mapNewsApiArticle } from '../helpers/mapNewsApiArticles';

const useFetchNewsApiArticles = (
  searchQuery: string
): {
  newsApiArticles: Article[] | null;
  isLoadingNewsArticles: boolean;
  errorLoadingNewsArticles: Error | null;
} => {
  const [newsApiArticles, setNewsApiArticles] = useState<Article[] | null>(
    null
  );
  const [isLoadingNewsArticles, setIsLoadingNewsArticles] = useState(false);
  const [errorLoadingNewsArticles, setErrorLoadingNewsArticles] =
    useState<Error | null>(null);

  useEffect(() => {
    setIsLoadingNewsArticles(true);
    setErrorLoadingNewsArticles(null);

    const fullUrl = `${newsUrl}?q=${searchQuery}&apiKey=${newsApi}`;

    fetch(fullUrl)
      .then((response: Response) => {
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData: NewsApiResponse) => {
        const mappedArticles: Article[] = responseData.articles.map(
          (article: NewsApiArticle) => mapNewsApiArticle(article)
        );
        setNewsApiArticles(mappedArticles.slice(0, 10));
      })
      .catch((err) => {
        setErrorLoadingNewsArticles(err);
      })
      .finally(() => {
        setIsLoadingNewsArticles(false);
      });
  }, [searchQuery]);

  return { newsApiArticles, isLoadingNewsArticles, errorLoadingNewsArticles };
};

export default useFetchNewsApiArticles;
