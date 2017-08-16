function controlLinks() {
    const theLinksToRemove = document.getElementById('theseLinks');
    const theList = document.getElementsByClassName('ourLinks');
    var oldChild;

    function removeLinksOnLoad() {
        oldChild = theList[0].removeChild(theLinksToRemove);
    }

    function addRemovedLinks() {
    
        theList[0].appendChild(oldChild);
    }

    return {
        removeLinksOnLoad: removeLinksOnLoad,
        addRemovedLinks: addRemovedLinks
    };
}

const theLinks = controlLinks();
const currentDiv = document.getElementById('links');

window.onload = theLinks.removeLinksOnLoad();
currentDiv.onclick = theLinks.addRemovedLinks;