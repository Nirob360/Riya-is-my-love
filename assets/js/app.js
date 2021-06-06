const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minEl = document.getElementById('min');
const secondEl = document.getElementById('second');




const newYears = '6 jun 2023';

function countDown() {
    const newYersDate = new Date(newYears);
    const curentDate = new Date();
    const totalSeconds = (newYersDate - curentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 % 24);
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minEl.innerHTML = minutes;
    secondEl.innerHTML = seconds;
    
}

// initial call 
countDown();

setInterval(countDown, 1000);