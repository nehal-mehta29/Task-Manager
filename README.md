# Task Manager

A simple **Task Manager Backend API** built using **Node.js, Express.js, and MongoDB (Mongoose)**. This project implements full CRUD operations along with filtering, pagination, and sorting as required in a MERN backend assignment.

---

## Features

* MongoDB database connection using **dotenv**
* Mongoose schema with validation
* Full **CRUD API** for tasks
* Advanced features:

  * Filtering (by completion status)
  * Pagination
  * Sorting (by title or created date)
* Centralized error handling

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv

---

## Project Structure

```
Task-Manager/
│
├── server.js
├── .env
├── config/
│   └── db.js
├── models/
│   └── Task.js
├── routes/
│   ├── createTask.js
│   ├── readTask.js
│   ├── updateTask.js
│   └── deleteTask.js
├── package.json
└── README.md
```

---

## Environment Variables

Create a `.env` file in the root directory:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

---

## How to Run the Project

### Step 1: Open Terminal / Command Prompt

* Open **VS Code**
* Open the project folder
* Open terminal (`Ctrl + ``)

### Step 2: Install Dependencies

```
npm install
```

### Step 3: Start the Server

```
npm start
```

or (if using nodemon):

```
npm run dev
```

### Check if Project is Running

* Terminal should show:

  ```
  Server running on port 3000
  MongoDB connected
  ```
* Open browser or Postman:

  ```
  http://localhost:3000/api/tasks
  ```

---

## API Endpoints

### Create Task

```
POST /api/tasks
```

### Get All Tasks

```
GET /api/tasks
```

### Get Task by ID

```
GET /api/tasks/:id
```

### Update Task

```
PUT /api/tasks/:id
```

### Delete Task

```
DELETE /api/tasks/:id
```

---

## Advanced Query Features

### Filtering

```
GET /api/tasks?completed=true
```

### Pagination

```
GET /api/tasks?page=1&limit=10
```

### Sorting

* By newest first:

```
GET /api/tasks?sortBy=createdAt
```

* By title:

```
GET /api/tasks?sortBy=title
```

---

## Validation Rules

* `title` is required
* `title` must be at least **3 characters long**

---

## Error Handling

* `400` – Bad Request
* `404` – Task Not Found
* `500` – Internal Server Error

---


