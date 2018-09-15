

//On button click, sets user's timer

let timerStart = document.querySelector('.button');

timerStart.addEventListener('click', ()=>{setAlarm()});




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


//Create new div on existing body element
const parent = document.querySelector('body');
const popup = document.createElement('div');
parent.prepend(popup);
popup.classList.add('popup');
popup.style = 'display: flex; justify-content: space-between; align-items: center; background-color: white; z-index: 10; height: 300px; width: 45%; border: 2px solid #41494E; margin-top: 10%; border-radius: 8px;';

//Create image div within popup
const image = document.createElement('div');
image.style = 'width: 50%; height: auto; overflow: hidden; padding-left: 3%;';
popup.appendChild(image);
image.classList.add('image');

const img = document.createElement('img');
img.setAttribute('src', './img/Time Reminder Memes/none of my business.jpg')

//Create text box div within popup
const textBox = document.createElement('div');
textBox.style = 'width: 45%; height: 90%; margin-top: 20px; display: flex; flex-flow: column wrap; justify-content: space-evenly;';
popup.appendChild(textBox);
textBox.classList.add('text-box');






//Delay popup on load
window.addEventListener('load', function(){
    this.setTimeout(function(){
        popup.style.display = 'flex'
    }, 1000);
});

