import { Article, MyPreferences } from '../types/Types';

export function filterArticles(
  articles: Article[],
  preferences: MyPreferences
): Article[] {
  return articles.filter((article) => {
    if (preferences.categories && preferences.categories.length > 0) {
      if (!preferences.categories.includes(article.category || '')) {
        return false;
      }
    }

    if (preferences.authors && preferences.authors.length > 0) {
      if (!preferences.authors.includes(article.author)) {
        return false;
      }
    }

    if (preferences.sources && preferences.sources.length > 0) {
      if (!preferences.sources.includes(article.source)) {
        return false;
      }
    }
    if (preferences.date) {
      if (article.pub_date !== preferences.date) {
        return false;
      }
    }

    return true;
  });
}
