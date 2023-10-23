export interface TheGuardianArticle {
  id: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  pillarName: string;
  fields: {
    byline: string;
    headline: string;
    bodyText: string;
  };
  sectionName: string;
  headline: string;
  trailText: string;
}

export interface GuardianResponse {
  response: {
    status: string;
    results: TheGuardianArticle[];
  };
}
