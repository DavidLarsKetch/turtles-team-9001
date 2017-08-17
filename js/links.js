function controlLinks() {
    const theLinksToRemove = document.getElementById('theseLinks');
    const theList = document.getElementById('ourLinks');
    var oldChild;

    function removeLinksOnLoad() {
        oldChild = theList.removeChild(theLinksToRemove);
    }

    function addRemovedLinks() {
    
        theList.appendChild(oldChild);
    }

    return {
        removeLinksOnLoad: removeLinksOnLoad,
        addRemovedLinks: addRemovedLinks
    };
}

const theLinks = controlLinks();
const currentDiv = document.getElementById('links');

theLinks.removeLinksOnLoad();
currentDiv.onclick = theLinks.addRemovedLinks;