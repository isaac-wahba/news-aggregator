import { useLocation } from 'react-router-dom';
import { formatArticleBody } from '../../../utils/formatArticleBody';
import './ArticleReadMode.css';
function ArticleReadMode() {
  const location = useLocation();
  const {
    state: { article },
  } = location;

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <div className="article-read-container">
      <h1>{article.title}</h1>
      <p className="source-author">Source: {article.source}</p>
      <p className="source-author">Published Date: {article.pub_date}</p>
      <p className="source-author">Author: {article.author}</p>
      <p className="source-author">Category: {article.category}</p>
      <div
        className="article-body"
        dangerouslySetInnerHTML={{ __html: formatArticleBody(article.body) }}
      />
    </div>
  );
}

export default ArticleReadMode;
