// ===== GET HTML ELEMENTS =====
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const filterButtons = document.querySelectorAll(".filters button[data-filter]");
const clearCompletedBtn = document.getElementById("clearCompleted");

const totalEl = document.getElementById("total");
const pendingEl = document.getElementById("pending");
const doneEl = document.getElementById("done");

// ===== LOAD TODOS FROM LOCAL STORAGE =====
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

// ===== SAVE TODOS TO LOCAL STORAGE =====
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// ===== UPDATE STATISTICS =====
function updateStats() {
    totalEl.textContent = `Total: ${todos.length}`;
    pendingEl.textContent = `Pending: ${todos.filter(todo => !todo.completed).length}`;
    doneEl.textContent = `Completed: ${todos.filter(todo => todo.completed).length}`;
}

// ===== RENDER TODOS ON SCREEN =====
function render() {

    // Step 1: Decide which todos to show
    let todosToShow = [];

    if (currentFilter === "all") {
        todosToShow = todos;
    } 
    else if (currentFilter === "pending") {
        todosToShow = todos.filter(todo => !todo.completed);
    } 
    else if (currentFilter === "completed") {
        todosToShow = todos.filter(todo => todo.completed);
    }

    // Step 2: Clear old list
    todoList.innerHTML = "";

    // Step 3: Create list items
    todosToShow.forEach(todo => {

        const li = document.createElement("li");
        li.className = "todo";

        if (todo.completed) {
            li.classList.add("completed");
        }

        // ===== CHECKBOX =====
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;

        checkbox.addEventListener("change", () => {
            // Find the correct todo using its ID
            const foundTodo = todos.find(t => t.id === todo.id);
            foundTodo.completed = checkbox.checked;

            saveTodos();
            render();
        });

        // ===== TEXT =====
        const span = document.createElement("span");
        span.textContent = todo.text;

        // ===== DELETE BUTTON =====
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✖";

        deleteBtn.addEventListener("click", () => {
            // Remove todo using its ID
            todos = todos.filter(t => t.id !== todo.id);

            saveTodos();
            render();
        });

        li.append(checkbox, span, deleteBtn);
        todoList.appendChild(li);
    });

    updateStats();
}

// ===== ADD NEW TODO =====
function addTodo() {
    const text = input.value.trim();

    if (text === "") return;

    todos.unshift({
        id: Date.now(),      // Unique ID (simple and safe)
        text: text,
        completed: false
    });

    input.value = "";
    saveTodos();
    render();
}

// ===== EVENTS =====
addBtn.addEventListener("click", addTodo);

input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        addTodo();
    }
});

// ===== FILTER BUTTONS =====
filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));

        // Add active class to clicked button
        button.classList.add("active");

        currentFilter = button.dataset.filter;
        render();
    });
});

// ===== CLEAR COMPLETED TODOS =====
clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter(todo => !todo.completed);
    saveTodos();
    render();
});

// ===== INITIAL RENDER =====
render();
