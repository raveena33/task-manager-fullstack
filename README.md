# Task Manager – Full Stack App

A simple full-stack Task Manager application built using Flask (Python) for the backend and vanilla HTML/CSS/JavaScript for the frontend. The app allows users to add, view, and delete tasks.

## Features

- Add new tasks with a title
- View all tasks and their statuses
- Delete tasks from the list
- Clean UI using plain HTML/CSS
- RESTful API with Flask
- Cross-Origin Resource Sharing (CORS) support

## Technologies Used

**Backend**
- Python
- Flask
- Flask-CORS

**Frontend**
- HTML
- CSS
- JavaScript (Fetch API)

## Project Structure

task-manager-fullstack/
│
├── backend/
│ ├── app.py
│ └── venv/ 
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js

## How to Run

### Backend (Flask)
1. Navigate to `backend/`:
    ```bash
    cd backend
    python -m venv venv
    .\venv\Scripts\activate      # Windows
    pip install flask flask-cors
    python app.py
    ```

2. Flask will run on: `http://127.0.0.1:5000`

### Frontend (Static Server)
1. Navigate to `frontend/`:
    ```bash
    cd frontend
    python -m http.server 5500
    ```

2. Open your browser at:  
   `http://127.0.0.1:5500/index.html`

