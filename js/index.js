

//On button click, sets user's timer

// let timerStart = document.querySelector('.go-button');

// timerStart.addEventListener('click', ()=>{setAlarm()});


let button = document.querySelector('.go-button');
button.addEventListener('click', ()=>{
    setAlarm();
    button.innerHTML = 'Timer Started!';
    button.style = 'width: 72%; background-color: #228B22; color: white; font-size: 16px; font-weight: 500; letter-spacing: 2.6px;';
});

let task = '';
function setAlarm() {
    let theTime = parseInt(document.getElementById("number").value)
    let theText = document.getElementById("input").value
    //let task = theText
    console.log(theTime);
    console.log(theText);
    chrome.alarms.create(theText, {delayInMinutes : theTime})
    chrome.storage.local.set({'toDo': theText}, function() {
        console.log('Value is set to ' + theText);
      });
}


function alarmOver(name){
    console.log('alarm over')
    chrome.alarms.clear(name)
}


var imageArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15',];

window.addEventListener('load', function(){
    const imageDiv = document.querySelector('.image');
    const randomImg = document.createElement('img');
    let num = Math.floor(Math.random() * imageArray.length);
    let img = imageArray[num];
    let imgStr = `img/Flava Flav/${img}.jpg`;
    randomImg.setAttribute('src', `${imgStr}`);
    imageDiv.appendChild(randomImg);
});

