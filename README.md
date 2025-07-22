# Task-6-Database-Integration-and-User-Authentication


✅ Project Title:
User Authentication and Form Handling App (Node.js + MongoDB Atlas)

📝 Description for Resume:
Developed a secure, session-based user authentication and data handling web application using Node.js, Express.js, and MongoDB Atlas (cloud database). Implemented a complete user registration and login system with password encryption using bcrypt, session management using express-session, and protected routing to restrict unauthorized access. Integrated a custom form that stores user-submitted data securely in a cloud-hosted MongoDB database.

🚀 Key Features & Responsibilities:
🔐 Built secure user authentication system with hashed passwords using bcryptjs.

🌐 Connected to MongoDB Atlas, a fully-managed cloud database, to store:

User credentials in the users collection

Form submissions in a dedicated formdatas collection

🛡️ Implemented session management using express-session and connect-mongo to maintain user sessions and ensure route protection.

📄 Created protected form route (/form) that allows only logged-in users to submit data.

💾 Persisted data across sessions and server restarts using MongoDB Atlas as the session store.

🗂️ Organized project with a modular folder structure using MVC-like routing (routes, models, views).

📁 Used EJS templating engine for rendering dynamic HTML pages with form data.

☁️ Use of MongoDB Atlas (Cloud Integration):
Hosted the MongoDB database on MongoDB Atlas to ensure:

High availability and scalability

Easy cloud access without setting up a local MongoDB server


Secure connection using environment variables (MONGO_URI)

Centralized data storage for both authentication and user form data

🛠️ Tech Stack:
Backend: Node.js, Express.js

Database: MongoDB Atlas (Cloud)

Templating: EJS

Authentication: bcryptjs, express-session

Session Store: connect-mongo

Environment Config: dotenv

💡 Optional Resume Add-on:
If you're submitting this to employers or colleges, you can add:

“This project demonstrates full-stack backend skills, including RESTful architecture, secure credential handling, and cloud database integration.”
