# Getting Started

Before you run the app, follow these steps:

1. **Create API Keys**:
    - [New York Times](https://developer.nytimes.com/)
    - [News API](https://newsapi.org/docs)
    - [The Guardian](https://open-platform.theguardian.com/access/)

2. **Install Dependencies**:
   - In your project's root directory, run the following command to install project dependencies:

    ```bash
    npm install
    ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory of the app.
   - Inside the `.env` file, include your API keys in the following variables:

    ```plaintext
    REACT_APP_NYT_KEY=your-nyt-api-key
    REACT_APP_NEWS_API_KEY=your-news-api-key
    REACT_APP_GUARDIAN_KEY=your-guardian-api-key
    ```
   
   Replace `your-nyt-api-key`, `your-news-api-key`, and `your-guardian-api-key` with your respective API keys.

4. **Start the Application**:
   - Now you're ready to run the app. Start it using your preferred method (e.g., `npm start` or `yarn start`).
