document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const taskForm = document.getElementById('task-form');
    const taskTitleInput = document.getElementById('task-title');
  
    const API_BASE = 'http://127.0.0.1:5000';
  
    async function loadTasks() {
      taskList.innerHTML = '';
      try {
        const response = await fetch(`${API_BASE}/tasks`);
        const data = await response.json();
  
        data.tasks.forEach(task => {
          const li = document.createElement('li');
          li.innerHTML = `
            <span>${task.title} (${task.status})</span>
            <button onclick="deleteTask(${task.id})">Delete</button>
          `;
          taskList.appendChild(li);
        });
      } catch (err) {
        console.error('Error loading tasks:', err);
      }
    }
  
    taskForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const title = taskTitleInput.value.trim();
      if (!title) return;
  
      try {
        await fetch(`${API_BASE}/tasks`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title })
        });
  
        taskTitleInput.value = '';
        loadTasks();
      } catch (err) {
        console.error('Error adding task:', err);
      }
    });
  
    async function deleteTask(id) {
      try {
        await fetch(`${API_BASE}/tasks/${id}`, {
          method: 'DELETE'
        });
        loadTasks();
      } catch (err) {
        console.error('Error deleting task:', err);
      }
    }
  
    window.deleteTask = deleteTask;
  
    // Initial load
    loadTasks();
  });
  