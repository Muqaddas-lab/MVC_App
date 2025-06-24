# MVC Express Backend App

This is a simple **Node.js** and **Express.js** backend project following the **MVC architecture (Model-View-Controller)** pattern.
It is divided into two main modules:

- 📌 **Todo App**
- 📚 **Bookstore App**

The purpose of this project is to demonstrate **modular routing**, **organized structure using MVC**, and **basic REST API handling** using Express.js.

---

## 📁 Project Structure

MVC-express/
├── controllers # Logic for handling requests
├── models # Data models and schemas
├── views # Placeholder for any future frontend templates
├── routers # All the route files (e.g., todorouters.js, bookstorerouters.js)
├── index.js # Main entry point of the application
├── package.json # Project metadata and dependencies

## ✨ Features

- Express.js backend server
- Follows MVC pattern for clean code structure
- RESTful API endpoints for:
  - Todo
  - Books
- JSON-based request and response handling

🌐 API Routes Overview
📌 Todo Routes (/)
GET /todos - Get all todos

POST /todos - Add a new todo

📚 Bookstore Routes (/)
GET /books - Get all books

POST /books - Add a new book
