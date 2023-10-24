import { useState } from 'react';
import SearchField from '../../components/SearchInput/SearchField';
import useFetchAggregatedArticles from '../../hooks/useFetchArticles';
import fetchNewsApiArticles from '../../services/data/fetchNewsApiArticles';
import fetchNYTArticles from '../../services/data/fetchNytArticles';
import fetchTheGardianArticles from '../../services/data/fetchTheGardianData';
import './HomePage.css';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { articles, errors, isLoading } = useFetchAggregatedArticles(
    searchQuery,
    [fetchNYTArticles, fetchNewsApiArticles, fetchTheGardianArticles]
  );
  if (articles) console.log('articles', articles, errors, isLoading);

  const onArticleSearch = (query: string) => {
    setSearchQuery(query);
  };
  return (
    <div className="layout">
      <div className="page-header">
        <SearchField onSearch={onArticleSearch} />
      </div>
    </div>
  );
}

export default HomePage;
