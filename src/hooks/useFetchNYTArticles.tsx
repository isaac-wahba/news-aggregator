import { useEffect, useState } from 'react';
import { nytKey, nytUrl } from '../apis/keys';
import { Article, NYTResponseData } from '../types/responses/NYTResponseTypes';
import { mapArticleToArticleType } from '../helpers/mapNYTArticles';
import { ArticleType } from '../types/Types';

const useFetchNYTArticles = (
  searchQuery: string
): {
  articles: ArticleType[] | null;
  copyRight: string | null;
  loading: boolean;
  error: Error | null;
} => {
  const [articles, setArticles] = useState<ArticleType[] | null>(null);
  const [copyRight, setCopyRight] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

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
        const mappedArticles: ArticleType[] = responseData.response.docs.map(
          (article) => mapArticleToArticleType(article)
        );
        setArticles(mappedArticles);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchQuery]);

  return { articles, loading, error, copyRight };
};

export default useFetchNYTArticles;
