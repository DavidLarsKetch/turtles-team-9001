var todoLastPurge, todoListKeys, todoRawInput, todoRandomId, todoCurrentKey, todoCurrentKeyLastPlace;

function todoBoxDisplay() {
  document.getElementById("todoButton").addEventListener("click", function() {
    document.getElementById("todoBox").classList.toggle("todoBoxOff");
  })
}

function todoInitializePurgeDate() {
  console.log("todoInitializePurgeDate is running.");
  var x = new Date();
  var d = x.getDate();
  var m = x.getMonth();
  var y = x.getFullYear();
  var z = new Date(y, m, d, 03, 00, 00, 0);
  todoLastPurge = Date.parse("'" + z + "'");
  window.localStorage.setItem("zzlastPurge", todoLastPurge);
}

//Upon loading extension, before stored todo items are displayed, this function runs, erasing any checked off todo items that have lapsed the time interval.
function todoEraseDoneItems() {
  var x = "";
  console.log("'" + x + "' = output of todoEraseDoneItems function.");
}

//Function to retrieve & display stored todo items.
function todoRetrieve() {
  var todoListKeys = Object.keys(localStorage);
  todoListKeys.sort();
  for (var i = 0; i < todoListKeys.length; i++) {
    todoCurrentKey = todoListKeys[i];
    todoCurrentKeyLastPlace = todoCurrentKey.slice(-1);
      todoRawInput = localStorage.getItem(todoCurrentKey);
      todoConstructItem(todoRawInput, todoCurrentKey, todoCurrentKeyLastPlace);
  }
}

//Function to count number of todo items left, not counting those checked off.
function todoCount() {
  var todoNumberOfItems = Object.keys(localStorage).length;
}


function todoListenToSubmit() {
  var todoForm = document.getElementById("todoInputForm");
  todoForm.addEventListener("submit", function(event) {
    todoRawInput = document.getElementById("todoInputField").value;
    if (todoRawInput.search(/\S/) !== -1) {
      todoConstructItem(todoRawInput);
      window.localStorage.setItem(todoRandomId, todoRawInput);
      todoCount();
    }
    todoForm.reset();
    event.preventDefault();
  });
}

function todoMakeRandomId() {
  todoRandomId = "t" + Date.now();
}

function todoConstructItem() {
  var todoTextNode = document.createTextNode(todoRawInput);

  var todoCheckbox = document.createElement("input");
  todoCheckbox.setAttribute("type", "checkbox");
  todoCheckbox.setAttribute("name", "todoItemCheckbox");
  todoCheckbox.setAttribute("id", "todoItemCheckbox");
  todoCheckbox.addEventListener("click", todoCheckoff);
  if (todoCurrentKeyLastPlace === "z") {
    todoCheckbox.setAttribute("checked", true);
  }

  var todoTextWrap = document.createElement("p");
  todoTextWrap.setAttribute("id", "todoItemName");
  todoTextWrap.appendChild(todoTextNode);
  if (todoCurrentKeyLastPlace === "z") {
    todoTextWrap.setAttribute("class", "todoItemDone");
  }

  var todoItemWrap = document.createElement("li");
  if (todoCurrentKey === undefined) {
    todoMakeRandomId();
    todoItemWrap.setAttribute("id", todoRandomId);
  } else {
    todoItemWrap.setAttribute("id", todoCurrentKey);
    todoCurrentKey = undefined;
  }

  todoItemWrap.appendChild(todoCheckbox);
  todoItemWrap.appendChild(todoTextWrap);

  var todoList = document.getElementById("todoList");
  todoList.appendChild(todoItemWrap);
}

//This function should give the stored item a timestamp to be used for erasing items at a certain interval.
function todoCheckoff() {
  var todoSibling = this.nextElementSibling;
  todoSibling.classList.toggle("todoItemDone");

  var todoCurrentId = this.parentElement.getAttribute("id");
  var todoCurrentItem = todoSibling.innerHTML;

  var todoCurrentKeyLastPlace = todoCurrentId.slice(-1);
  var todoNewId;

  if (todoCurrentKeyLastPlace === "z") {
    todoNewId = todoCurrentId.split('');
    todoNewId.pop();
    todoNewId = todoNewId.join('');
  } else {
    todoNewId = todoCurrentId + "z";
  }

  window.localStorage.removeItem(todoCurrentId);
  window.localStorage.setItem(todoNewId, todoCurrentItem);
  this.parentElement.setAttribute("id", todoNewId);

  todoCount();
}

window.onload = function(){
  todoListKeys = Object.keys(localStorage);

  todoLastPurge = window.localStorage.getItem("zzLastPurge");
  if (!todoLastPurge) {
    todoInitializePurgeDate();
  }

  todoEraseDoneItems(todoLastPurge);
  todoRetrieve();
  todoCount();
  todoListenToSubmit();
  todoBoxDisplay();
}
