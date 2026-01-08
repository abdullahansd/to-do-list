const input = document.querySelector("input");
const addBtn = document.querySelector("#add-btn");
const task = document.querySelector(".task");

addBtn.addEventListener("click", ()=> {
    addTask();
    input.value = "";
});

function addTask () {
const toDoList = document.createElement("ul");
toDoList.classList.add("todo-list");

const item = document.createElement("li");
item.classList.add("todo-item");

const span = document.createElement("span");
span.classList.add("todo-itemspan");
span.textContent = input.value;
span.addEventListener("click", function(){
    span.style.textDecoration = "line-through";
    span.style.color = "#888";
});

const delBtn = document.createElement("button");
delBtn.classList.add("delete-btn");
delBtn.textContent = "Delete";
delBtn.addEventListener("click", function(){
        task.removeChild(toDoList);
    });

item.appendChild(span);
item.appendChild(delBtn);

toDoList.appendChild(item);

task.appendChild(toDoList);
}