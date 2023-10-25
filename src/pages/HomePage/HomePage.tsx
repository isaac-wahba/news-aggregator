import { useState } from 'react';
import './HomePage.css';
import SearchField from '../../components/atoms/SearchInput/SearchField';
import useFetchAggregatedArticles from '../../hooks/useFetchArticles';
import Filters from '../../components/molecules/Filters/Filters';
import { ArticlesFilters, NewsResource } from '../../types/Types';
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

function HomePage() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filters, setFilters] = useState<ArticlesFilters>();
  // update on change preferences.
  const [newsResources, setNewsResources] =
    useState<NewsResource[]>(allNewsResources);
  // update on src click
  const [fetchArticlesList, setFetchArticlesList] = useState<
    FetchArticlesFromResource[]
  >(
    fetchArticlesByResourceList.map(
      (fetchArticlesByResource: FetchArticlesByResource) =>
        fetchArticlesByResource.fetchArticlesFromResource
    )
  );
  const { articles, errors, isLoading } = useFetchAggregatedArticles(
    searchQuery,
    fetchArticlesList
  );
  if (articles) {
    console.log('functions', fetchArticlesList);
    console.log('articles', articles, errors, isLoading);
  }

  const onArticleSearch = (query: string) => {
    setSearchQuery(query);
  };
  const onCategorySelect = (category: string) => {
    setFilters({
      ...filters,
      category: category,
    });
  };
  const onDateChange = (date: string) => {
    setFilters({
      ...filters,
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

  // call on save filters.
  const updateFetchArticlesList = () => {
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
  };

  return (
    <div className="layout">
      <div className="search-field-container">
        <SearchField onSearch={onArticleSearch} />
      </div>
      <div className="sources-container">
        <NewsSourceTabs
          newsResources={newsResources}
          onSelectResource={onResourceChange}
        />
      </div>
      <div className="filters-container">
        <Filters
          onSelectCategory={onCategorySelect}
          onChangeDate={onDateChange}
        />
      </div>
    </div>
  );
}

export default HomePage;
