function setTime() {
    var time = new Date();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var theTimeIs = document.getElementsByClassName("time")[0];

    (function putTime() {
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
    })();

    (function greeting() {
        const greet = document.getElementsByClassName('greeting');
    
        if (hr > 0 && hr < 12) {
            greet[0].textContent = 'Good Morning';
        }
        
        if (hr == 12) {
            greet[0].textContent = 'Good Noon';
        }
    
        if (hr > 12 && hr < 18) {
            greet[0].textContent = 'Good Afternoon';
        }
    
        if (hr > 18 || hr == 0) {
            greet[0].textContent = 'Good Evening';
        }
    })();
}

var updatedTime = setInterval(setTime, 500);