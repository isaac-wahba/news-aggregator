import { NewsResourcesEnum } from '../enums/NewsResourcesEnum';
import { Article } from './Types';

export type FetchArticlesFromResource = (searchQuery: string) => Promise<{
  articles: Article[] | null;
}>;

export interface FetchArticlesByResource {
  id: NewsResourcesEnum;
  fetchArticlesFromResource: FetchArticlesFromResource;
}
