import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Article } from '../../../types/Types';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
interface ArticleCardProps {
  article: Article;
}
export default function ArticleCard({ article }: ArticleCardProps) {
  const navigate: NavigateFunction = useNavigate();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {article.source} {bull} {article.pub_date}
        </Typography>
        <Typography variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {article.author ?? 'Unknown'} {bull} {article.category}
        </Typography>
        <Typography variant="body2">
          {article.snippet}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            navigate(`/article/${article.title}`, { state: { article } });
          }}
        >
          Read More
        </Button>
        {bull}
        <Button
          size="small"
          onClick={() => {
            window.open(article.web_url);
          }}
        >
          Read on {article.source}
        </Button>
      </CardActions>
    </Card>
  );
}
