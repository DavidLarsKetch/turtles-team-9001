    function todoAddNew() {
      var todoNewRawInput = document.getElementById("todoInputField").value;
//Need to check whether input field is blank before creating new todo item.
      if (1===1) {
        var todoNewTodoItem = document.createElement("li");
        var todoNewCheckboxWrap = document.createElement("input");
        todoNewCheckboxWrap.setAttribute("type", "checkbox");
        todoNewCheckboxWrap.setAttribute("name", "todoItemCheckbox");
        todoNewCheckboxWrap.setAttribute("id", "todoItemCheckbox");
        var todoNewTextWrap = document.createElement("p");

        var todoNewTextNode = document.createTextNode(todoNewRawInput);

        todoNewTextWrap.appendChild(todoNewTextNode);
        todoNewTodoItem.appendChild(todoNewCheckboxWrap);
        todoNewTodoItem.appendChild(todoNewTextWrap);

        var todoListContainer = document.getElementById("todoList");

        todoListContainer.appendChild(todoNewTodoItem);
      }
    }

    window.onload = function(){
      document.getElementById("todoInputButton").addEventListener("click", todoAddNew);
//Need function to change style of checked todo items to crossed out.

//Need function to erase crossed out todos after certain interval.

    }
