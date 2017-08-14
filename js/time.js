function setTime() {
    var time = new Date();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var theTimeIs = document.getElementsByClassName("time")[0];

    if (hr < 10) {
        hr = '0' + hr;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    
    theTimeIs.innerHTML = hr + ':'+ min + ':' + sec;
}

var updatedTime = setInterval(setTime, 500);