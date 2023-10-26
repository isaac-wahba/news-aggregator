import { Article } from '../../../types/Types';
import NoArticlesView from '../../atoms/NoArticlesView/NoArticlesView';
import ArticleCard from '../../molecules/ArticleCard/ArticleCard';
import './ArticlesList.css';
interface ArticlesListProps {
  articles: Article[];
}

function ArticlesList({ articles }: ArticlesListProps) {
  return (
    <>
      {articles.length === 0 && <NoArticlesView />}
      <div className="cards-container">
        {articles.map((article: Article, index: number) => {
          return (
            <div key={index}>
              <ArticleCard article={article} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ArticlesList;
