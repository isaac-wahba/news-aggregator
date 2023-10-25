import { fetchArticlesByResourceList } from '../constants/newsResources';
import { NewsResourcesEnum } from '../enums/NewsResourcesEnum';
import {
  FetchArticlesByResource,
  FetchArticlesFromResource,
} from '../types/serviceTypes';

type GetFetchFunctionType = (
  src: NewsResourcesEnum
) => FetchArticlesFromResource;
export const filterFetchNewsFunction: GetFetchFunctionType = (
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
