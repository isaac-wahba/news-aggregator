import './App.css';
import useFetchNYTArticles from './hooks/useFetchNYTArticles';

function App() {
  const { articles, error, loading, copyRight } =
    useFetchNYTArticles('mo salah');
  if (articles) console.log(articles, error, copyRight, loading);

  return <div className="App">Hey</div>;
}

export default App;
