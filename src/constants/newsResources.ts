import { NewsResourcesEnum } from '../enums/NewsResourcesEnum';
import fetchNewsApiArticles from '../services/data/fetchNewsApiArticles';
import fetchNYTArticles from '../services/data/fetchNytArticles';
import fetchTheGardianArticles from '../services/data/fetchTheGardianData';
import { NewsResource } from '../types/Types';
import { FetchArticlesByResource } from '../types/serviceTypes';

export const allNewsResources: NewsResource[] = [
  {
    id: NewsResourcesEnum.NewYorkTimes,
    label: 'The New York Times',
  },
  {
    id: NewsResourcesEnum.TheGuardian,
    label: 'The Guardian',
  },
  { id: NewsResourcesEnum.NewsAPI, label: 'News API' },
];

export const fetchArticlesByResourceList: FetchArticlesByResource[] = [
  {
    id: NewsResourcesEnum.TheGuardian,
    fetchArticlesFromResource: fetchTheGardianArticles,
  },
  {
    id: NewsResourcesEnum.NewYorkTimes,
    fetchArticlesFromResource: fetchNYTArticles,
  },
  {
    id: NewsResourcesEnum.NewsAPI,
    fetchArticlesFromResource: fetchNewsApiArticles,
  },
];
