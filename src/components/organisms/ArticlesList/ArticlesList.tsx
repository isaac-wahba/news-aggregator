import { AlertEnum } from '../../../enums/AlertEnum';
import { Article } from '../../../types/Types';
import AlertView from '../../molecules/AlertView/AlertView';
import ArticleCard from '../../molecules/ArticleCard/ArticleCard';
import './ArticlesList.css';
interface ArticlesListProps {
  articles: Article[];
  noDataViewMessage: string;
  hasNoSearchValue?: boolean;
}

function ArticlesList({
  articles,
  noDataViewMessage,
  hasNoSearchValue,
}: ArticlesListProps) {
  return (
    <>
      {articles.length === 0 && (
        <AlertView
          message={noDataViewMessage}
          alertType={hasNoSearchValue ? AlertEnum.Info : AlertEnum.Warning}
        />
      )}
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
