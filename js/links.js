function deleteLinks() {
    var currentDiv = document.getElementById("links");
    
    currentDiv.childNodes[1].remove();
}

function createLinks() {
    var newList = document.createElement("ul");
    var listItem = document.createElement("li");
    var currentDiv = document.getElementById("links");

    listItem.textContent = "Adrian";
    newList.appendChild(listItem);
    currentDiv.appendChild(newList);
}

var currentDiv = document.getElementById("links");
currentDiv.onclick = function() {
    deleteLinks();
    createLinks();
}
