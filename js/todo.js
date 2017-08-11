function todoAddNew() {
  var todoRawInput = document.getElementById("todoInputField").value;
//Need to check whether input field is blank before creating new todo item.
  if (1===1) {
    var todoItemWrap = document.createElement("li");

    var todoCheckbox = document.createElement("input");
    todoCheckbox.setAttribute("type", "checkbox");
    todoCheckbox.setAttribute("name", "todoItemCheckbox");
    todoCheckbox.setAttribute("id", "todoItemCheckbox");
    todoCheckbox.setAttribute("style", "display:inline");
    todoCheckbox.addEventListener("click", todoLineThrough);

    var todoTextWrap = document.createElement("p");
    todoTextWrap.setAttribute("id", "todoItemName");
    todoTextWrap.setAttribute("style", "display:inline");

    var todoTextNode = document.createTextNode(todoRawInput);

    todoTextWrap.appendChild(todoTextNode);
    todoItemWrap.appendChild(todoCheckbox);
    todoItemWrap.appendChild(todoTextWrap);

    var todoListContainer = document.getElementById("todoList");
    todoListContainer.appendChild(todoItemWrap);
  }
}

function todoLineThrough() {
  var x = this.nextElementSibling;
  x.classList.toggle("todoItemDone");
}

//Need function to erase crossed out todos after certain interval.
function todoEraseDoneItems() {
  console.log("The todoEraseDoneItems function will work!");
}


window.onload = function(){
  document.getElementById("todoInputButton").addEventListener("click", todoAddNew);
  todoEraseDoneItems();
}
