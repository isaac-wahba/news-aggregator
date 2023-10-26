import './App.css';
import ApplicationBar from './components/atoms/AppBar/AppBar';
import ArticleReadMode from './components/organisms/ArticleReadMode/ArticleReadMode';
import HomePage from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ApplicationBar text="News Aggregator" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:title" element={<ArticleReadMode />} />
      </Routes>
    </div>
  );
}

export default App;
