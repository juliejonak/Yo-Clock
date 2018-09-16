

//On button click, sets user's timer

// let timerStart = document.querySelector('.go-button');

// timerStart.addEventListener('click', ()=>{setAlarm()});


let button = document.querySelector('.go-button');
button.addEventListener('click', ()=>{
    // setAlarm();
    button.innerHTML = 'Timer Started!';
    button.style = 'width: 72%; background-color: #228B22; color: white; font-size: 16px; font-weight: 500; letter-spacing: 2.6px;';
});




