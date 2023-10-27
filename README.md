# Getting Started [Deployment First Approach]

Before you run the app, follow these steps:

1. **Create API Keys**:
    - [New York Times](https://developer.nytimes.com/)
    - [News API](https://newsapi.org/docs)
    - [The Guardian](https://open-platform.theguardian.com/access/)

2. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory of the app.
   - Inside the `.env` file, include your API keys in the following variables:

    ```plaintext
    REACT_APP_NYT_KEY=your-nyt-api-key
    REACT_APP_NEWS_API_KEY=your-news-api-key
    REACT_APP_GUARDIAN_KEY=your-guardian-api-key
    ```
   
   Replace `your-nyt-api-key`, `your-news-api-key`, and `your-guardian-api-key` with your respective API keys.

3. **Create a Local Docker Image**:
   - Ensure you have Docker installed on your machine.
   - Open your terminal and navigate to the root directory of the app.
   - Build a Docker image for your app using the following command:

    ```bash
    docker build -t your-image-name .
    ```

    Replace `your-image-name` with a name for your Docker image.

4. **Run the Docker Container**:
   - After successfully building the Docker image, you can run your app in a Docker container using the following command:

    ```bash
    docker run -d -p 3000:3000 --name news-app your-image-name
    ```

    Replace `your-image-name` with the name of the Docker image you created.

5. **Access Your App**:
   - Open your web browser and access your app by navigating to `http://localhost:3000`. Your app should be running inside a Docker container.

That's it! Your app is now running in a Docker container on your local machine.


# Getting Started [Development Mode]

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
   - Now you're ready to run the app. Start it using `npm start`.
  
