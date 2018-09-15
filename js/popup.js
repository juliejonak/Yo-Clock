

//Create new div on existing body element

const head = document.querySelector('head');
const fontSet = document.createElement('link');
fontSet.setAttribute('href', 'https://fonts.googleapis.com/css?family=Kanit:400,600');
fontSet.setAttribute('rel', 'stylesheet');
head.prepend(fontSet);

const parent = document.querySelector('body');
const popup = document.createElement('div');
parent.prepend(popup);
popup.classList.add('popup');
popup.style = 'display: flex; justify-content: space-between; align-items: center; background-color: white; z-index: 10; height: 300px; width: 45%; border: 2px solid #41494E; margin: 0 auto; margin-top: 10%; border-radius: 8px; font-family: `Kanit`, sans-serif;';

//Create image div within popup
const image = document.createElement('div');
image.style = 'width: 48%; height: auto; overflow: hidden; padding-left: 3%;';
popup.appendChild(image);
image.classList.add('image');

//Create img with source within image div
const img = document.createElement('img');
img.setAttribute('src', './img/Time Reminder Memes/none of my business.jpg')
img.style = 'width: 100%; height: auto; border-radius: 4px;';
image.appendChild(img);

//Create text box div within popup
const textBox = document.createElement('div');
textBox.style = 'width: 45%; height: 90%; display: flex; flex-direction: column; flex-wrap: wrap; justify-content: space-evenly;';
popup.appendChild(textBox);
textBox.classList.add('text-box');

//Create h2 title within text box
const title = document.createElement('h2');
title.style.fontFamily = 'Kanit, sans-serif;'
title.style = 'font-size: 26px; font-weight: 600; color: #FF5C00; letter-spacing: 2.6px;';
title.innerHTML = 'Set Yo Clock!';
textBox.appendChild(title);

//Create time input div
const timeBox = document.createElement('div');
timeBox.style = 'display: flex; align-items: center; margin-bottom: 10px;';
textBox.appendChild(timeBox);
timeBox.classList.add('time');

//Create Label in timeBox
const timeLabel = document.createElement('label');
timeLabel.setAttribute('for', 'number');
timeLabel.innerHTML = 'How much time?';
timeLabel.style = 'font-size: 14px; margin-right: 5%;';
timeBox.appendChild(timeLabel);

//Create input in timeBox
const timeInput = document.createElement('input');
timeInput.setAttribute('id', 'number');
timeInput.setAttribute('type', 'number');
timeInput.setAttribute('value', '25');
timeInput.style = 'width: 25%; font-size: 12px;';
timeBox.appendChild(timeInput);

//Create task input div
const taskBox = document.createElement('div');
taskBox.style = 'display: flex; flex-direction: column; flex-wrap: wrap;';
textBox.appendChild(taskBox);
taskBox.classList.add('task');

//Create task label in taskBox
const taskLabel = document.createElement('label');
taskLabel.setAttribute('for', 'input');
taskLabel.innerHTML = 'What task do you need to accomplish afterwards?';
taskLabel.style = 'font-size: 14px; line-height: 17px; margin-bottom: 15px;';
taskBox.appendChild(taskLabel);


//Create task text area in taskBox
const taskText = document.createElement('textarea');
taskText.setAttribute('id', 'input');
taskText.setAttribute('name', 'userInput');
taskText.setAttribute('rows', '4');
taskText.setAttribute('cols', '5');
taskText.setAttribute('maxlength', '200');
taskText.setAttribute('wrap', 'hard');
taskText.setAttribute('placeholder', 'Walk Mr. Chewbarka');
taskText.style = 'width: 80%; font-size: 13px; padding-top: 5px; padding-left: 3%;';
taskBox.appendChild(taskText);

//Create button div
const button = document.createElement('div');
button.style = 'width: 30%; height: 30px; display: flex; align-items: center; justify-content: center; background-color: #FF5C00; cursor: pointer; border-radius: 4px; align-self: flex-end; margin-right: 15%;';
textBox.appendChild(button);
button.classList.add('button');


//Create h3 in button
const buttonText = document.createElement('h3');
buttonText.style = 'color: white; font-family: `Kanit`, sans-serif; font-size: 16px; font-weight: 600; letter-spacing: 2.6px;';
buttonText.innerHTML = 'Go';
button.appendChild(buttonText);


//button Hover functionality 

button.addEventListener('mouseover', function(){
    button.style.background = '#3C91E6';
})

button.addEventListener('mouseleave', function(){
    button.style.background = '#FF5C00'
})




//Delay popup on load
window.addEventListener('load', function(){
    this.setTimeout(function(){
        popup.style.display = 'flex'
    }, 1000);
});
