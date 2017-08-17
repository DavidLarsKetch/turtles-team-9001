function controlLinks() {
    const theLinksToRemove = document.getElementById('theseLinks');
    const theList = document.getElementById('parentLinksNode');

    function removeLinksOnLoad() {
        theLinksToRemove.remove();
    }

    function addRemovedLinks() {
    
        theList.appendChild(theLinksToRemove);
    }

    return {
        removeLinksOnLoad: removeLinksOnLoad,
        addRemovedLinks: addRemovedLinks
    };
}

const theLinks = controlLinks();
const currentDiv = document.getElementById('linksOnPress');
const parentNode = document.getElementById('parentLinksNode');

theLinks.removeLinksOnLoad();

if (parentNode.hasChildNodes) {
    console.log(parentNode.childElementCount);
}

currentDiv.onclick = function() {
    if (parentNode.childElementCount == 0) {
        theLinks.addRemovedLinks();
    }
    else {
        theLinks.removeLinksOnLoad();
    }
}