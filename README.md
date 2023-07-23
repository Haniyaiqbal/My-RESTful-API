# My-RESTful-API

The RESTful API is a server-side application built using Node.js, Express.js, and MongoDB. It provides CRUD (Create, Read, Update, Delete) operations for managing articles. It follows RESTful principles to handle different HTTP methods and routes.

Features:

✅ Get All Articles: GET request to "/articles" retrieves all articles from the database.
✅ Create New Article: POST request to "/articles" adds a new article to the database.
✅ Delete All Articles: DELETE request to "/articles" deletes all articles from the database.
✅ Get Specific Article: GET request to "/articles/:articleTitle" retrieves a specific article based on the article title.
✅ Update Specific Article (PUT): PUT request to "/articles/:articleTitle" updates a specific article completely with new values.
✅ Update Specific Article (PATCH): PATCH request to "/articles/:articleTitle" updates specific fields of an article.
✅ Delete Specific Article: DELETE request to "/articles/:articleTitle" deletes a specific article.

Setup Instructions:

1. Install MongoDB and ensure it's running.
2. Clone the project and navigate to the project folder.
3. Run `npm install` to install dependencies.
4. Start the server with `node app.js` or `nodemon app.js`.
5. Access the API at `http://localhost:3000` in Postman or other API clients.

Usage:

- Use Postman or similar tools to test the API endpoints and perform CRUD operations on articles.

API Endpoints:

1. Get all articles: Send a GET request to `http://localhost:3000/articles`.
2. Create a new article: Send a POST request to `http://localhost:3000/articles` with a JSON body containing `title` and `content`.
3. Delete all articles: Send a DELETE request to `http://localhost:3000/articles`.
4. Get a specific article: Send a GET request to `http://localhost:3000/articles/:articleTitle` with the `articleTitle` in the URL.
5. Update a specific article (PUT): Send a PUT request to `http://localhost:3000/articles/:articleTitle` with a JSON body containing `title` and `content`.
6. Update a specific article (PATCH): Send a PATCH request to `http://localhost:3000/articles/:articleTitle` with a JSON body containing the fields to update.
7. Delete a specific article: Send a DELETE request to `http://localhost:3000/articles/:articleTitle`.

Customization:

- Modify the articleSchema to include additional fields as needed.
- Update the API routes and methods to handle more specific use cases if required.

Author: Developed with ❤️ by Haniya.

Create, read, update, and delete articles with ease using the RESTful API!
