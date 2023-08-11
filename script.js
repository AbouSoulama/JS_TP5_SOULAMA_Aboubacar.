// Selecteurs
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Ecouteurs
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);


// Fonctions

function addTodo(event) {
    event.preventDefault();
    // Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // créé la liste
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    
    // bouton check
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    // bouton supprimé
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    
    // ajouter le todo  a todo liste
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}
function deleteCheck(e) {
    const item = e.target;
    // Delete Todo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }
}
 



