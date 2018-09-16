

//On button click, sets user's timer

// let timerStart = document.querySelector('.go-button');

// timerStart.addEventListener('click', ()=>{setAlarm()});



let button = document.querySelector('.go-button');
button.addEventListener('click', ()=>{
    // setAlarm();
    button.innerHTML = 'Timer Started!';
    button.style = 'width: 72%; background-color: #228B22; color: white; font-size: 16px; font-weight: 500; letter-spacing: 2.6px;';
});



//Randomize the image shown on load

// class Image {
//     constructor(element) {
//         this.element = element;

//         this.images = document.querySelectorAll('.random');

//         addEventListener('load',)
//     }
// }

// let images = document.querySelectAll('.random');
// images = Array.from(images).map((item)=>{new Image(item)})


// function randomImage() {

//     var i = Math.floor(Math.random()*images.length);
  
//     // document.getElementById(“random”).src=”Raw Images/” + images[i];
  
//   }



