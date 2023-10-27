import { useState, useEffect } from 'react';
import { Article, MyPreferences, fetchArticlesResult } from '../types/Types';

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
  apiFunctions: ((query: string) => Promise<any>)[],
  preferences: MyPreferences
) {
  const [articles, setArticles] = useState<Article[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [allAuthors, setAllAuthors] = useState<string[]>([]);
  const [allCategories, setAllCategories] = useState<string[]>([]);

  useEffect(() => {
    if (searchQuery !== '') fetchAllArticles();
    else {
      setArticles([]);
      setHasError(false);
      setIsLoading(false);
    }
  }, [searchQuery, apiFunctions, preferences]);

  const fetchAllArticles = async () => {
    setHasError(false);
    setIsLoading(true);

    const promises = apiFunctions.map((apiFunction) =>
      fetchArticlesFromApi(apiFunction, searchQuery)
    );

    try {
      const authorsSet = new Set<string>();
      const categoriesSet = new Set<string>();
      const results: fetchArticlesResult[] = await Promise.all(promises);
      let resultArticles: Article[] | undefined = [];
      results.forEach((result: fetchArticlesResult) => {
        if (result.articles && result.articles?.length > 0)
          resultArticles = resultArticles?.concat(result.articles);
      });
      setArticles(resultArticles);
      resultArticles.forEach((article) => {
        if (article.author) {
          authorsSet.add(article.author);
        }
        if (article.category) {
          categoriesSet.add(article.category);
        }
      });

      if (preferences?.authors && preferences.authors.length > 0) {
        setAllAuthors(
          Array.from(authorsSet).filter(
            (author: string) =>
              preferences.authors && preferences.authors.includes(author)
          )
        );
      } else {
        setAllAuthors(Array.from(authorsSet));
      }
      if (preferences?.categories && preferences.categories.length > 0) {
        setAllAuthors(
          Array.from(authorsSet).filter(
            (category: string) =>
              preferences.categories &&
              preferences.categories.includes(category)
          )
        );
      } else {
        setAllCategories(Array.from(categoriesSet));
      }
      setHasError(false);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { articles, allAuthors, allCategories, isLoading, hasError };
}

export default useFetchAggregatedArticles;
