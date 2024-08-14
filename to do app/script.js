// Initialize 'todos' as an empty array
var todos = [];

// Function to add a new task
function addTask() {
    const todoInput = document.getElementById("todoInput");
    const todoValue = todoInput.value.trim();
    const priority = document.getElementById("prioritySelect").value;
    if (todoValue === "") return;

    todos.push({
        text: todoValue,
        completed: false,
        priority: priority
    });

    todoInput.value = "";
    updateTodolist();
}

// Function to update and display the todo list
function updateTodolist() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = "";

    todos.forEach(function(task, index) {
        const listItem = document.createElement('li');
        listItem.className = `priority-${task.priority}`;
        listItem.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
            <button onclick="toggleCompleted(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
        `;
        todoList.appendChild(listItem);
    });

    updateCount();
}

// Function to toggle the completed status of a task
function toggleCompleted(index) {
    todos[index].completed = !todos[index].completed;
    updateTodolist();
}

// Function to delete a task
function deleteTask(index) {
    todos.splice(index, 1);
    updateTodolist();
}

// Function to edit a task
function editTask(index) {
    const newTask = prompt("Edit your task:", todos[index].text);
    if (newTask !== null) {
        todos[index].text = newTask.trim();
        updateTodolist();
    }
}

// Function to update the task count
function updateCount() {
    const totalTasksElement = document.getElementById('totalTask');
    const completedTasksElement = document.getElementById('completedTask');

    const total = todos.length;
    const completed = todos.reduce(function(acc, todo) {
        return todo.completed ? acc + 1 : acc;
    }, 0);

    totalTasksElement.textContent = total;
    completedTasksElement.textContent = completed;
}

// Function to search tasks
function searchTasks() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = "";

    todos.forEach(function(task, index) {
        if (task.text.toLowerCase().includes(searchInput)) {
            const listItem = document.createElement('li');
            listItem.className = `priority-${task.priority}`;
            listItem.innerHTML = `
                <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
                <button onclick="toggleCompleted(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
            `;
            todoList.appendChild(listItem);
        }
    });
}
function searchTasks() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = ""; // Clear the current list

    // Filter and display tasks that match the search query
    todos.forEach(function(task, index) {
        if (task.text.toLowerCase().includes(searchInput)) {
            const listItem = document.createElement('li');
            listItem.className = `priority-${task.priority}`;
            listItem.innerHTML = `
                <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
                <button onclick="toggleCompleted(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
            `;
            todoList.appendChild(listItem);
        }
    });
}