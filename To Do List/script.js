const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

let editTodo = null;

// Function to add a new todo item
const addTodo = () => {
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0) {
        alert('Please enter a todo item');
        return false;
    }

    if(addBtn.value === "Edit") {
        //passing the value to p tag
        editLocalTodos(editTodo.target.previousElementSibling.innerText);
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = "Add";
        inputBox.value = '';
    }
    else{
    //creating p tag
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = inputText;
    li.appendChild(p);

    
    // create a edit button
    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);

    // creating delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Remove';
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
    inputBox.value = '';

    saveLocalTodos(inputText);
}
}
// Function to update : (Edit/Delete)todo
const updateTodo = (e) => {
 if(e.target.innerHTML ==="Remove"){
    todoList.removeChild(e.target.parentElement);
    deleteLocalTodos(e.target.parentElement);
 }

 if(e.target.innerHTML === "Edit"){
    inputBox.value = e.target.previousElementSibling.innerText;
    inputBox.focus();
    addBtn.value = "Edit";
    editTodo = e;
 }

}

// Function to save todo in local storage
const saveLocalTodos = (todo) => {
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to get todo from local storage
const getLocalTodos = () => {
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
        todos.forEach(todo => {

        //creating p tag
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerHTML = todo;
        li.appendChild(p);

    
        // create a edit button
        const editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        editBtn.classList.add("btn", "editBtn");
        li.appendChild(editBtn);

        // creating delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Remove';
        deleteBtn.classList.add("btn", "deleteBtn");
        li.appendChild(deleteBtn);

        todoList.appendChild(li); 
        });
    };
}

//Function to delete from local storage
const deleteLocalTodos = (todo) => {
     let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    let todoText = todo.children[0].innerHTML;
    let todoIndex = todos.indexOf(todoText);
    todo.splice(todoIndex, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    // Array function : slice/ splice
    console.log(todoIndex);
}

const editLocalTodos = (todo) => {
    let todos = JSON.parse(localStorage.getItem('todos'));
    let todoIndex = todos.indexOf(todo);
    todos[todoIndex] = inputBox.value;
    localStorage.setItem('todos', JSON.stringify(todos));
}

document.addEventListener('DOMContentLoaded', getLocalTodos);
addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', updateTodo);