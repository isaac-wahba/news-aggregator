import { useState } from 'react';
import SearchField from '../../components/SearchInput/SearchField';
import useFetchAggregatedArticles from '../../hooks/useFetchArticles';
import fetchNewsApiArticles from '../../services/data/fetchNewsApiArticles';
import fetchNYTArticles from '../../services/data/fetchNytArticles';
import fetchTheGardianArticles from '../../services/data/fetchTheGardianData';
import './HomePage.css';
import AutoComplete from '../../components/AutoComplete/AutoComplete';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedAuthor, setSelectedAuthor] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const { articles, errors, isLoading } = useFetchAggregatedArticles(
    searchQuery,
    [fetchNYTArticles, fetchNewsApiArticles, fetchTheGardianArticles]
  );
  if (articles) console.log('articles', articles, errors, isLoading);

  const onArticleSearch = (query: string) => {
    setSearchQuery(query);
  };
  const onAuthorSelect = (author: string) => {
    setSelectedAuthor(author);
  };
  const onCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <div className="layout">
      <div className="page-header">
        <SearchField onSearch={onArticleSearch} />
        <AutoComplete
          label="Select Author"
          onSelect={onAuthorSelect}
          options={['a', 'b', 'c']}
        />
        <AutoComplete
          label="Select Category"
          onSelect={onCategorySelect}
          options={['a', 'b', 'c']}
        />
      </div>
    </div>
  );
}

export default HomePage;
