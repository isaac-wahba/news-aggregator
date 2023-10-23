import './App.css';
import useFetchAggregatedArticles from './hooks/useFetchArticles';
import useFetchNYTArticles from './hooks/separate-api-calls/useFetchNYTArticles';
import useFetchNewsApiArticles from './hooks/separate-api-calls/useFetchNewsApiArticles';
import useFetchTheGardianArticles from './hooks/separate-api-calls/useFetchTheGardianArticles';
import fetchNewsApiArticles from './services/data/fetchNewsApiArticles';
import fetchNYTArticles from './services/data/fetchNytArticles';
import fetchTheGardianArticles from './services/data/fetchTheGardianData';

function App() {
  // const {
  //   nytArticles,
  //   errorLoadingNytArticles,
  //   isLoadingNytArticles,
  //   copyRight,
  // } = useFetchNYTArticles('mo salah');
  // const { newsApiArticles, isLoadingNewsArticles, errorLoadingNewsArticles } =
  //   useFetchNewsApiArticles('mo salah');
  // if (nytArticles)
  //   console.log(
  //     'nytArticles',
  //     nytArticles,
  //     copyRight,
  //     errorLoadingNytArticles,
  //     isLoadingNytArticles
  //   );
  // if (newsApiArticles)
  //   console.log(
  //     'newsApiArticles',
  //     newsApiArticles,
  //     isLoadingNewsArticles,
  //     errorLoadingNewsArticles
  //   );

  // const {
  //   theGardianArticles,
  //   errorLoadingTheGardianArticles,
  //   isLoadingTheGardianArticles,
  // } = useFetchTheGardianArticles('mo salah');

  // if (theGardianArticles)
  //   console.log(
  //     'theGardianArticles',
  //     theGardianArticles,
  //     errorLoadingTheGardianArticles,
  //     isLoadingTheGardianArticles
  //   );

  const { articles, errors, isLoading } = useFetchAggregatedArticles(
    'mo salah',
    [fetchNYTArticles, fetchNewsApiArticles, fetchTheGardianArticles]
  );
  if (articles) console.log('articles', articles, errors, isLoading);
  return <div className="App">Hey</div>;
}

export default App;
