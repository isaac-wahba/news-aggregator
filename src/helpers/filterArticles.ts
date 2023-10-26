import { Article, MyPreferences } from '../types/Types';

export function filterArticles(
  articles: Article[],
  preferences: MyPreferences
): Article[] {
  return articles.filter((article) => {
    // Check if the article matches the category preference (if specified)
    if (preferences.categories && preferences.categories.length > 0) {
      if (!preferences.categories.includes(article.category || '')) {
        return false;
      }
    }

    // Check if the article matches the author preference (if specified)
    if (preferences.authors && preferences.authors.length > 0) {
      if (!preferences.authors.includes(article.author)) {
        return false;
      }
    }

    // Check if the article matches the source preference (if specified)
    if (preferences.sources && preferences.sources.length > 0) {
      if (!preferences.sources.includes(article.source)) {
        return false;
      }
    }
    // Check if the article matches the date preference (if specified)
    if (preferences.date) {
      // You can define your date comparison logic here
      if (article.pub_date !== preferences.date) {
        return false;
      }
    }
    // Add additional checks for other preferences like date if needed

    return true;
  });
}
