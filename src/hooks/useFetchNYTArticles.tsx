import { useEffect, useState } from 'react';
import { nytKey, nytUrl } from '../apis/keys';
import { NYTResponseData } from '../types/responses/NYTResponseTypes';
import { mapArticleToArticleType } from '../helpers/mapNYTArticles';
import { Article } from '../types/Types';

const useFetchNYTArticles = (
  searchQuery: string
): {
  nytArticles: Article[] | null;
  copyRight: string | null;
  isLoadingNytArticles: boolean;
  errorLoadingNytArticles: Error | null;
} => {
  const [nytArticles, setNytArticles] = useState<Article[] | null>(null);
  const [copyRight, setCopyRight] = useState<string | null>(null);
  const [isLoadingNytArticles, setLoading] = useState(false);
  const [errorLoadingNytArticles, setErrorLoadingNytArticles] =
    useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    setErrorLoadingNytArticles(null);

    const fullUrl = `${nytUrl}?q=${searchQuery}&api-key=${nytKey}`;

    fetch(fullUrl)
      .then((response: Response) => {
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData: NYTResponseData) => {
        setCopyRight(responseData.copyright);
        const mappedArticles: Article[] = responseData.response.docs.map(
          (article) => mapArticleToArticleType(article)
        );
        setNytArticles(mappedArticles);
      })
      .catch((err) => {
        setErrorLoadingNytArticles(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchQuery]);

  return {
    nytArticles,
    isLoadingNytArticles,
    errorLoadingNytArticles,
    copyRight,
  };
};

export default useFetchNYTArticles;
