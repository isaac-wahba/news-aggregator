import { useEffect, useState } from 'react';
import { Article } from '../types/Types';
import { guardianKey, guardianUrl } from '../apis/keys';
import { GuardianResponse } from '../types/responses/TheGardianResponseTypes';
import { mapTheGardianArticle } from '../helpers/mapTheGardianArticles';

const useFetchTheGardianArticles = (
  searchQuery: string
): {
  theGardianArticles: Article[] | null;
  isLoadingTheGardianArticles: boolean;
  errorLoadingTheGardianArticles: Error | null;
} => {
  const [theGardianArticles, setTheGardianArticles] = useState<
    Article[] | null
  >(null);
  const [isLoadingTheGardianArticles, setILoadingTheGardianArticles] =
    useState(false);
  const [errorLoadingTheGardianArticles, setIsLoadingTheGardianArticles] =
    useState<Error | null>(null);

  useEffect(() => {
    setILoadingTheGardianArticles(true);
    setIsLoadingTheGardianArticles(null);

    const fullUrl = `${guardianUrl}?q=${searchQuery}&show-fields=headline,bodyText,byline&api-key=${guardianKey}`;

    fetch(fullUrl)
      .then((response: Response) => {
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData: GuardianResponse) => {
        const mappedArticles: Article[] = responseData.response.results.map(
          (article) => mapTheGardianArticle(article)
        );
        setTheGardianArticles(mappedArticles);
      })
      .catch((err) => {
        setIsLoadingTheGardianArticles(err);
      })
      .finally(() => {
        setILoadingTheGardianArticles(false);
      });
  }, [searchQuery]);

  return {
    theGardianArticles,
    isLoadingTheGardianArticles,
    errorLoadingTheGardianArticles,
  };
};

export default useFetchTheGardianArticles;
