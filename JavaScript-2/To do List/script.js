const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const filterButtons = document.querySelectorAll(".filters button[data-filter]");
const clearCompletedBtn = document.getElementById("clearCompleted");

const totalEl = document.getElementById("total");
const pendingEl = document.getElementById("pending");
const doneEl = document.getElementById("done");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function updateStats() {
    totalEl.textContent = `Total: ${todos.length}`;
    pendingEl.textContent = `Pending: ${todos.filter(t => !t.completed).length}`;
    doneEl.textContent = `Completed: ${todos.filter(t => t.completed).length}`;
}

function render() {
    let filtered = todos;

    if (currentFilter === "pending") {
        filtered = todos.filter(t => !t.completed);
    } else if (currentFilter === "completed") {
        filtered = todos.filter(t => t.completed);
    }

    const items = filtered.map((todo, index) => {
        const li = document.createElement("li");
        li.className = "todo";
        if (todo.completed) li.classList.add("completed");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;

        checkbox.addEventListener("change", () => {
            todos[index].completed = checkbox.checked;
            saveTodos();
            render();
        });

        const span = document.createElement("span");
        span.textContent = todo.text;

        const delBtn = document.createElement("button");
        delBtn.textContent = "✖";
        delBtn.addEventListener("click", () => {
            todos.splice(index, 1);
            saveTodos();
            render();
        });

        li.append(checkbox, span, delBtn);
        return li;
    });

    todoList.replaceChildren(...items);
    updateStats();
}

function addTodo() {
    const value = input.value.trim();
    if (!value) return;

    todos.unshift({
        text: value,
        completed: false
    });

    input.value = "";
    saveTodos();
    render();
}

addBtn.addEventListener("click", addTodo);

input.addEventListener("keydown", e => {
    if (e.key === "Enter") addTodo();
});

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        render();
    });
});

clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter(t => !t.completed);
    saveTodos();
    render();
});

render();
