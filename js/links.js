function createLinks() {
    var currentDiv = document.getElementById("links");
    var newList = document.createElement("ul");
    var listItem = document.createElement("li");

    currentDiv.childNodes[1].remove();
    listItem.textContent = "Adrian";
    newList.appendChild(listItem);
    currentDiv.appendChild(newList);
}

var currentDiv = document.getElementById("links");
currentDiv.onclick = createLinks;
