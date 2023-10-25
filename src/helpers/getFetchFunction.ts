import { fetchArticlesByResourceList } from '../constants/newsResources';
import { NewsResourcesEnum } from '../enums/NewsResourcesEnum';
import {
  FetchArticlesByResource,
  FetchArticlesFromResource,
} from '../types/serviceTypes';

export const filterFetchNewsFunction = (
  src: NewsResourcesEnum
): FetchArticlesFromResource => {
  return fetchArticlesByResourceList
    .filter(
      (fetchArticleByResource: FetchArticlesByResource) =>
        fetchArticleByResource.id === src
    )
    .map(
      (fetchFromSrc: FetchArticlesByResource) =>
        fetchFromSrc.fetchArticlesFromResource
    )[0];
};
