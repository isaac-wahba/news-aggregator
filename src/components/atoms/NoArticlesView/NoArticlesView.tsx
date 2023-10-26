import './NoArticlesView.css';
interface NoArticlesViewProps {
  message?: string;
}
function NoArticlesView({ message }: NoArticlesViewProps) {
  return (
    <div className="no-articles-message ">
      {message ? message : 'No items to view...'}
    </div>
  );
}

export default NoArticlesView;
