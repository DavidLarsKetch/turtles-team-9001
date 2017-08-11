function createLinks() {
    var currentDiv = document.getElementById("links");
    var newList = document.createElement("ul");
    var listItem = document.createElement("li");

    listItem.textContent = "Adrian";
    currentDiv.childNodes[0].remove();
    newList.appendChild(listItem);
    currentDiv.appendChild(newList);
}

(function press() {
    var currentDiv = document.getElementById("links");
    currentDiv.onclick = createLinks();
})();