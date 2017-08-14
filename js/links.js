function createLinks() {
    var currentDiv = document.getElementsByClassName("ourLinks");
    const ourNames = ['Adrian', 'David', 'Jacob'];

    for (let i = 0; i < 3; i++) {
        var listItem = document.createElement("li");
        listItem.classList.add('ourListItemNames');
        listItem.textContent = ourNames[i];
        currentDiv[0].appendChild(listItem);
    }
}

var currentDiv = document.getElementById("links");
currentDiv.onclick = function() {
    var thisName = document.getElementsByClassName('ourListItemNames');
    
    if (thisName.length == 0) {
        createLinks();
    }
    else {
        for (let i = 0; i < 3; i++) {
            thisName[0].remove();
        }
    }
}
