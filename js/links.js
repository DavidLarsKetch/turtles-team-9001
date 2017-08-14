function createLinks() {
    var currentDiv = document.getElementsByClassName("ourLinks");
    const ourNames = ['Adrian', 'David', 'Jacob'];

    for (let i = 0; i < 3; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = ourNames[i];
        currentDiv[0].appendChild(listItem);
    }
}

var currentDiv = document.getElementById("links");
currentDiv.onclick = function() {
    createLinks();
}
