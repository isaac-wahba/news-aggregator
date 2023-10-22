export default class ApiClient {
  static async get<T>(url: string, throwErrors = false): Promise<T> {
    try {
      const response = await fetch(url);
      if (throwErrors && (response.status <= 100 || response.status >= 499)) {
        throw new Error(`API Returned error status ${response.status}`);
      }
      const responseData: T = await response.json();
      return responseData;
    } catch (e: any) {
      return e;
    }
  }
}
