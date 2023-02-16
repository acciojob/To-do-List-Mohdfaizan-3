//your code here


const todoValue = document.getElementById("newTodoInput");
const btn = document.getElementById("addTodoBtn");
const ol = document.getElementById("todoList");

function addTodo() {
  
  if(todoValue.value) {
  
    let li = document.createElement("li");
    li.textContent = todoValue.value;
    ol.appendChild(li);
    todoValue.value = "";
  }
}

btn.addEventListener("click", addTodo);