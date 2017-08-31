function setTime() {
    var time = new Date();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var theTimeIs = document.getElementsByClassName("time")[0];
    const greet = document.getElementsByClassName('greeting');

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
        const userName = localStorage.getItem('userName');
        if (userName == null) {
            const greetName = prompt('Please insert name');
            localStorage.setItem('userName', greetName);
        }

        if (hr > 0 && hr < 12) {
            greet[0].textContent = 'Good Morning, ' + userName;
        }
        
        if (hr == 12) {
            greet[0].textContent = 'Good Noon' + userName;
        }
    
        if (hr > 12 && hr < 18) {
            greet[0].textContent = 'Good Afternoon, ' + userName;
        }
    
        if (hr > 18 || hr == 0) {
            greet[0].textContent = 'Good Evening, ' + userName;
        }
    })();
}

var updatedTime = setInterval(setTime, 500);