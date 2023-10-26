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
  filters: MyPreferences
) {
  const [articles, setArticles] = useState<Article[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errors, setErrors] = useState<Error[]>([]);
  const [allAuthors, setAllAuthors] = useState<string[]>([]);
  const [allCategories, setAllCategories] = useState<string[]>([]);

  useEffect(() => {
    if (searchQuery !== '') fetchAllArticles();
    else {
      setArticles([]);
      setErrors([]);
      setIsLoading(false);
    }
  }, [searchQuery, apiFunctions, filters]);

  const fetchAllArticles = async () => {
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

      if (filters?.authors && filters.authors.length > 0) {
        setAllAuthors(
          Array.from(authorsSet).filter(
            (author: string) =>
              filters.authors && filters.authors.includes(author)
          )
        );
      } else {
        setAllAuthors(Array.from(authorsSet));
      }
      if (filters?.categories && filters.categories.length > 0) {
        setAllAuthors(
          Array.from(authorsSet).filter(
            (category: string) =>
              filters.categories && filters.categories.includes(category)
          )
        );
      } else {
        setAllCategories(Array.from(categoriesSet));
      }
    } catch (error) {
      setErrors([...errors, error as Error]);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(articles);

  return { articles, allAuthors, allCategories, isLoading, errors };
}

export default useFetchAggregatedArticles;
