import { useEffect, useState } from 'react';
import './HomePage.css';
import SearchField from '../../components/atoms/SearchInput/SearchField';
import useFetchAggregatedArticles from '../../hooks/useFetchArticles';
import Filters from '../../components/molecules/Filters/Filters';
import {
  Article,
  ArticlesFilters,
  MyPreferences,
  NewsResource,
} from '../../types/Types';
import NewsSourceTabs from '../../components/organisms/NewsSourceTabs/NewsSourceTabs';
import {
  allNewsResources,
  fetchArticlesByResourceList,
} from '../../constants/newsResources';
import { NewsResourcesEnum } from '../../enums/NewsResourcesEnum';
import {
  FetchArticlesByResource,
  FetchArticlesFromResource,
} from '../../types/serviceTypes';
import { filterFetchNewsFunction } from '../../helpers/getFetchFunction';
import MyPreferencesModal from '../../components/organisms/MyPreferencesModal/MyPreferencesModal';
import { filterArticles } from '../../helpers/filterArticles';
import ArticlesList from '../../components/organisms/ArticlesList/ArticlesList';
import LoadingIndicator from '../../components/atoms/LoadingIndicator/LoadingIndicator';
import AlertView from '../../components/molecules/AlertView/AlertView';
import { AlertEnum } from '../../enums/AlertEnum';
import {
  NavigateFunction,
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

function HomePage() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string>(
    searchParams.get('search') ?? ''
  );
  const [filters, setFilters] = useState<ArticlesFilters>();
  const navigate: NavigateFunction = useNavigate();

  const [newsResources, setNewsResources] =
    useState<NewsResource[]>(allNewsResources);

  const [fetchArticlesList, setFetchArticlesList] = useState<
    FetchArticlesFromResource[]
  >(
    fetchArticlesByResourceList.map(
      (fetchArticlesByResource: FetchArticlesByResource) =>
        fetchArticlesByResource.fetchArticlesFromResource
    )
  );
  const [myPreferences, setMyPreferences] = useState<MyPreferences>({
    categories: [],
    authors: [],
    sources: [],
  });
  const { articles, isLoading, allAuthors, allCategories, hasError } =
    useFetchAggregatedArticles(searchQuery, fetchArticlesList, myPreferences);

  const [articlesToDisplay, setArticlesToDisplay] = useState<Article[]>(
    articles ?? []
  );
  const [categories, setCategories] = useState<string[]>(allCategories);
  const [authors, setAuthors] = useState<string[]>(allAuthors);
  const onArticleSearch = (query: string) => {
    navigate({
      pathname: '/',
      search: createSearchParams({
        search: query ?? '',
      }).toString(),
    });
    setSearchQuery(query);
  };
  const onCategorySelect = (category: string) => {
    setFilters({
      ...filters,
      category: category,
    });
    setMyPreferences({
      ...myPreferences,
      categories: category ? [category] : [],
    });
  };

  const onDateChange = (date: string) => {
    setFilters({
      ...filters,
      date: date,
    });

    setMyPreferences({
      ...myPreferences,
      date: date,
    });
  };

  const onResourceChange = (src: NewsResourcesEnum, isChosen: boolean) => {
    const fetchNewsFunction: FetchArticlesFromResource =
      filterFetchNewsFunction(src);
    if (isChosen) {
      setFetchArticlesList([...fetchArticlesList, fetchNewsFunction]);
    } else {
      setFetchArticlesList(
        fetchArticlesList.filter(
          (f: FetchArticlesFromResource) => f !== fetchNewsFunction
        )
      );
    }
  };

  const onUpdatePreferences = (selectedPreferences: MyPreferences) => {
    setMyPreferences(selectedPreferences);
    if (filters?.category && filters?.category?.length > 0) {
      setFilters({
        ...filters,
        category: undefined,
      });
    }
    if (
      selectedPreferences.sources &&
      selectedPreferences.sources?.length > 0
    ) {
      setNewsResources(
        allNewsResources.filter((newsResource: NewsResource) => {
          return (
            selectedPreferences.sources &&
            selectedPreferences.sources.includes(newsResource.label)
          );
        })
      );
    }
    setCategories(selectedPreferences.categories ?? []);
    setAuthors(selectedPreferences.authors ?? []);
  };
  useEffect(() => {
    if (articles) setArticlesToDisplay(filterArticles(articles, myPreferences));
    else setArticlesToDisplay([]);
  }, [articles, myPreferences]);

  useEffect(() => {
    if (searchQuery === '') {
      setFilters(undefined);
      setCategories([]);
      setAuthors([]);
    } else {
      setCategories(allCategories);
      setAuthors(allAuthors);
    }
  }, [isLoading, searchQuery]);

  useEffect(() => {
    setFetchArticlesList(
      fetchArticlesByResourceList
        .filter((fetchArticlesByResource: FetchArticlesByResource) =>
          newsResources
            .map((newsResource: NewsResource) => newsResource.id)
            .includes(fetchArticlesByResource.id)
        )
        .map(
          (fetchArticlesByResource: FetchArticlesByResource) =>
            fetchArticlesByResource.fetchArticlesFromResource
        )
    );
  }, [newsResources]);

  return (
    <div className="layout">
      <div className="search-field-container">
        <SearchField onSearch={onArticleSearch} />
      </div>
      <div className="sources-and-preferences">
        <div className="sources-container">
          <NewsSourceTabs
            newsResources={newsResources}
            onSelectResource={onResourceChange}
          />
        </div>
        <MyPreferencesModal
          categoriesOptions={categories}
          authorsOptions={authors}
          newsSourcesOptions={allNewsResources.map(
            (newsResource: NewsResource) => newsResource.label
          )}
          onSavePreferences={onUpdatePreferences}
          selectedPreferences={myPreferences}
        />
      </div>
      <div className="filters-container">
        <Filters
          categoriesOptions={categories}
          onSelectCategory={onCategorySelect}
          onChangeDate={onDateChange}
          selectedCategory={filters?.category ?? undefined}
          selectedDate={filters?.date ?? null}
        />
      </div>

      <div className="articles-list-container">
        {isLoading ? (
          <>
            <LoadingIndicator />
          </>
        ) : hasError ? (
          <AlertView
            message="Error loading articles .."
            alertType={AlertEnum.Error}
          />
        ) : (
          <ArticlesList
            articles={articlesToDisplay}
            noDataViewMessage={
              searchQuery
                ? `No articles found for "${searchQuery}"`
                : 'Start searching to find something interesting to read today!'
            }
            hasNoSearchValue={!searchQuery}
          />
        )}
      </div>
    </div>
  );
}

export default HomePage;
