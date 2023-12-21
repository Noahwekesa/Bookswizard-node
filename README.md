# BooksWizard

## About BooksWizard Project:

BooksWizard is a beginner-friendly Node.js application designed to provide a hands-on learning experience with Node.js, Express, MongoDB, and OpenAI. This project focuses on building a simple book management system that allows users to create a books database, perform CRUD (Create, Read, Update, Delete) operations on MongoDB, and receive AI-generated book suggestions using OpenAI.

### Prerequisites:

Before you begin, ensure you have the following installed on your system:

Node.js: A JavaScript runtime.
MongoDB: A NoSQL database.
Text Editor: Neovim

## Getting Started:

1. clone the repo:

```bash
git clone https://github.com/noahwekesa/Bookswizard-node.git
```

2. Navigate to the project directory:

```bash
cd BooksWizard-node
```

3. install dependencies

```bash
npm install
```

4. Configure MongoDB:

5. Create a MongoDB database and update the connection string in
   .env
6. Set up OpenAI:
   Get your OpenAI API key and update it in .env
7. Run the application:

```bash
npm start
```

Features:

1. Create a Books Database:
   Learn and practice CRUD operations on MongoDB.
   Add, retrieve, update, and delete books in the database.
2. Get AI Suggestions:
   Utilize OpenAI to generate book suggestions based on the data in the database.
   Enhance your understanding of integrating external APIs into a Node.js application.
   Project Structure:
   app.js: Entry point of the application.
   handlers/: Handles business logic.
   models/: Defines MongoDB data models.
