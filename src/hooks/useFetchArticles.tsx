import { useState, useEffect } from 'react';
import { Article, fetchArticlesResult } from '../types/Types';

async function fetchArticlesFromApi(
  apiFunction: (query: string) => Promise<any>,
  searchQuery: string
) {
  try {
    const result = await apiFunction(searchQuery);
    return result;
  } catch (error) {
    throw error;
  }
}

function useFetchAggregatedArticles(
  searchQuery: string,
  apiFunctions: ((query: string) => Promise<any>)[]
) {
  const [articles, setArticles] = useState<Article[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errors, setErrors] = useState<Error[]>([]);

  useEffect(() => {
    if (searchQuery !== '') fetchAllArticles();
    else {
      setArticles([]);
      setErrors([]);
      setIsLoading(false);
    }
  }, [searchQuery]);

  const fetchAllArticles = async () => {
    setIsLoading(true);

    const promises = apiFunctions.map((apiFunction) =>
      fetchArticlesFromApi(apiFunction, searchQuery)
    );

    try {
      const results: fetchArticlesResult[] = await Promise.all(promises);
      console.log(results);
      //   const resultArticles: Article[] | null = results.map(
      //     (result: fetchArticlesResult) => result.articles
      //   );

      let resultArticles: Article[] | undefined = [];
      results.forEach((result: fetchArticlesResult) => {
        if (result.articles && result.articles?.length > 0)
          resultArticles = resultArticles?.concat(result.articles);
      });
      setArticles(resultArticles);
    } catch (error) {
      setErrors([...errors, error as Error]);
    } finally {
      setIsLoading(false);
    }
  };

  return { articles, isLoading, errors };
}

export default useFetchAggregatedArticles;
