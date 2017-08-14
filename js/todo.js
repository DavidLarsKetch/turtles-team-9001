function todoUserEnterListen() {
  document.getElementById("todoInputForm").addEventListener("submit", function(event) {
    todoAddNew();
    event.preventDefault();
    this.value = "";
  })
}

function todoAddNew() {
  var todoRawInput = document.getElementById("todoInputField").value;
//Need to check whether input field is blank before creating new todo item.
  if (1===1) {
    var todoItemWrap = document.createElement("li");

    var todoCheckbox = document.createElement("input");
    todoCheckbox.setAttribute("type", "checkbox");
    todoCheckbox.setAttribute("name", "todoItemCheckbox");
    todoCheckbox.setAttribute("id", "todoItemCheckbox");
    todoCheckbox.addEventListener("click", todoCheckoff);

    var todoTextWrap = document.createElement("p");
    todoTextWrap.setAttribute("id", "todoItemName");

    var todoTextNode = document.createTextNode(todoRawInput);

    todoTextWrap.appendChild(todoTextNode);
    todoItemWrap.appendChild(todoCheckbox);
    todoItemWrap.appendChild(todoTextWrap);

    var todoList = document.getElementById("todoList");
    todoList.appendChild(todoItemWrap);

    todoStore();
    todoCount();
  }
}

//This function should give the stored item a timestamp to be used for erasing items at a certain interval.
function todoCheckoff() {
  var x = this.nextElementSibling;
  x.classList.toggle("todoItemDone");
  todoCount();
}

//Function to erase crossed out todos after certain interval.
//All crossed off items should be erased at the same time, e.g., at 00:00.
//Upon loading extension, before stored todo items are displayed, this function runs, erasing any checked off todo items that have lapsed the time interval.
function todoEraseDoneItems() {
  var x = "This is the output of the todoEraseDoneItems function."
  console.log(x);
}

//Function to retrieve & display stored todo items.
function todoRetrieve() {
  var x = "This is the output of the todoRetrieve function."
  console.log(x)
}

//Function to count number of todo items left, not counting those checked off.
function todoCount() {
  var x = "This is the output of the todoCount function."
  console.log(x)
}

//Function to store todo items, potentially using window.localStorage.
function todoStore() {
  var x = "This is the output of the todoStore function."
  console.log(x)
}

window.onload = function(){
  todoEraseDoneItems();
  todoRetrieve();
  todoCount();
  todoUserEnterListen();
}
