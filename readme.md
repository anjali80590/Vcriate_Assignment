## [Live Link ](https://vcriate-assignment-1.onrender.com/api/quizzes)

# Project Overview

This project is a RESTful API built with **Node.js**, **Express.js**, and **MongoDB**. It allows users to register, log in, and manage quizzes. The quiz questions are of the MCQ type, with four options and only one correct answer.

The main objective of this API is to manage user authentication, create and retrieve quizzes, allow users to take quizzes, and display their results.

# Features

- **User Authentication**: Register and login functionality using JWT-based authentication.
  
- **MCQ Quiz Management**:
  - Create quizzes with multiple-choice questions.
  - Retrieve all quizzes or a specific quiz by its ID.
  - Submit answers and calculate the result of the quiz.
- **Secure Routes**: Protected routes that only logged-in users can access.

# Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing quiz data.
- **Mongoose**: MongoDB object modeling tool.
- **JWT**: JSON Web Tokens for securing user authentication.
- **Postman**: API testing tool for sending requests and viewing responses.

# Installation


## Steps to Install

1. **Clone the repository**:
   ```bash
   git clone https://github.com/anjali80590/Vcriate_Assignment.git
   cd Vcriate_Assignment

2. **Install dependencies**
     ```bash
    npm install

3. **set up environment variables:**
    ```bash
     MONGO_URI=mongodb://localhost:27017/quizdb
     JWT_SECRET=your_jwt_secret_key

3. **Run Application**
    ```bash
    npm start

