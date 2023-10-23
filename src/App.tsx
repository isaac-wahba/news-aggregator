import './App.css';
import useFetchNYTArticles from './hooks/useFetchNYTArticles';
import useFetchNewsApiArticles from './hooks/useFetchNewsApiArticles';
import useFetchTheGardianArticles from './hooks/useFetchTheGardianArticles';

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
  return <div className="App">Hey</div>;
}

export default App;
