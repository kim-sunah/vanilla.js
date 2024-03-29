const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const Todos_Key = "todos"

let toDos = [];

function saveTodo(){
    localStorage.setItem(Todos_Key, JSON.stringify(toDos))
}

function deleteTodo(event){
    const li = event.target.parentElement;
    
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    li.remove();
    saveTodo();

}

function paintTodo(newTodo){
    const li =  document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span")
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "delete";
    button.addEventListener("click",deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li)
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    const newTodoObj = {
        text: newTodo,
        id:Date.now(),
    }
    toDos.push(newTodoObj)
    paintTodo(newTodoObj)
    saveTodo();
}
todoForm.addEventListener("submit", handleTodoSubmit);

function sayHello(item){
   paintTodo
}

const savedTodos=localStorage.getItem(Todos_Key)
if(savedTodos != null){
    const parsedTodos = JSON.parse(savedTodos);
    toDos= parsedTodos;
    parsedTodos.forEach(paintTodo);
}
