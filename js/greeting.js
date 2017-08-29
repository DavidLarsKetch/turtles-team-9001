(function greeting() {
    const greet = document.getElementsByClassName('greeting');
    const time = new Date();
    const hr = time.getHours();

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