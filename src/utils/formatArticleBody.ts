export function formatArticleBody(text: string): string {
  const phrases = text.split('. ');

  const phrasesBetweenEmptyLines = 5;

  const formattedPhrases: string[] = [];

  for (let i = 0; i < phrases.length; i++) {
    if ((i + 1) % phrasesBetweenEmptyLines === 0) {
      formattedPhrases.push('<br /><br />');
      formattedPhrases.push(phrases[i]);
    } else {
      formattedPhrases.push('<br />');
      formattedPhrases.push(phrases[i] + '.');
    }
  }

  const formattedText = formattedPhrases.join('');

  return formattedText;
}
