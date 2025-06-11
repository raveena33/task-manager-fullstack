# Task Manager API (Flask)

A simple RESTful API built using Python and Flask for managing tasks.

## Features

- Add new tasks  
- View all tasks  
- Update task status  
- Delete tasks  
- JSON input/output  
- Built-in error handling

## Endpoints

- `GET /tasks` – List all tasks  
- `POST /tasks` – Create a new task (`{ "title": "Task name" }`)  
- `PUT /tasks/<id>` – Update a task’s status (`{ "status": "done" }`)  
- `DELETE /tasks/<id>` – Remove a task

## How to Run

```bash
# 1. Create a virtual environment
python -m venv venv

# 2. Activate the environment
.\venv\Scripts\Activate

# 3. Install Flask
pip install flask

# 4. Start the app
python app.py
