let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    const list = document.getElementById('taskList');
    list.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span ${task.done ? 'style="text-decoration: line-through"' : ''}>${task.title} [${task.category}] [${task.priority}]</span>
        <button onclick="toggleDone(${index})">Готово</button>
        <button onclick="deleteTask(${index})">Удалить</button>`;
        list.appendChild(li);
    });
}

function addTask() {
    const title = document.getElementById('taskTitle').value;
    const category = document.getElementById('taskCategory').value;
    const priority = document.getElementById('taskPriority').value;
    if(title) {
        tasks.push({title, category, priority, done: false});
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
        document.getElementById('taskTitle').value = '';
    }
}

function deleteTask(index) {
    tasks.splice(index,1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function toggleDone(index) {
    tasks[index].done = !tasks[index].done;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

document.getElementById('addTask').addEventListener('click', addTask);
renderTasks();
