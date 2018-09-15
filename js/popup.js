

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
popup.style = 'display: flex; justify-content: space-between; align-items: center; background-color: white; z-index: 10; height: 300px; width: 60%; border: 2px solid #41494E; margin: 0 auto; margin-top: 10%; border-radius: 8px; font-family: `Kanit`, sans-serif;';

//Create image div within popup
const image = document.createElement('div');
image.style = 'width: 50%; height: auto; overflow: hidden; padding-left: 3%;';
popup.appendChild(image);
image.classList.add('image');

//Create img with source within image div
const img = document.createElement('img');
img.setAttribute('src', './img/Time Reminder Memes/none of my business.jpg')
img.style = 'width: 80%; height: auto; border-radius: 4px;';
image.appendChild(img);

//Create text box div within popup
const textBox = document.createElement('div');
textBox.style = 'width: 47%; height: 26vh; display: flex; flex-direction: column; justify-content: space-between; margin-top: -45px;';
popup.appendChild(textBox);
textBox.classList.add('text-box');

//Create h2 title within text box
const titleOne = document.createElement('h2');
titleOne.style.fontFamily = 'Kanit, sans-serif;'
titleOne.style = 'font-size: 32px; font-weight: 600; color: #FF5C00; letter-spacing: 2.6px; line-height: 40px;';
titleOne.innerHTML = 'Do you want to <br> Set Yo Clock?';
textBox.appendChild(titleOne);

//Buttons box within textBox
const buttons = document.createElement('div');
buttons.style = 'display: flex;';
textBox.appendChild(buttons);
buttons.classList.add('buttons');

//YES BUTTON

//Create button one div
const buttonOne = document.createElement('div');
buttonOne.style = 'width: 40%; height: 40px; display: flex; align-items: center; justify-content: center; background-color: #FF5C00; cursor: pointer; border-radius: 4px; align-self: flex-end; margin-right: 15%;';
buttons.appendChild(buttonOne);
buttonOne.classList.add('button');
buttonOne.classList.add('yes');

//Create h3 in button
const buttonTextOne = document.createElement('h3');
buttonTextOne.style = 'color: white; font-family: `Kanit`, sans-serif; font-size: 21px; font-weight: 600; letter-spacing: 2.6px;';
buttonTextOne.innerHTML = 'Yes!';
buttonOne.appendChild(buttonTextOne);

//Hover capability
buttonOne.addEventListener('mouseover', function(){
    buttonOne.style.background = '#3C91E6';
})

buttonOne.addEventListener('mouseleave', function(){
    buttonOne.style.background = '#FF5C00'
})

//NO BUTTON

//Create button div
const buttonTwo = document.createElement('div');
buttonTwo.style = 'width: 30%; height: 40px; display: flex; align-items: center; justify-content: center; background-color: rgb(70, 66, 82); cursor: pointer; border-radius: 4px; align-self: flex-end; margin-right: 15%;';
buttons.appendChild(buttonTwo);
buttonTwo.classList.add('button');
buttonTwo.classList.add('yes');

//Create h3 in button
const buttonTextTwo = document.createElement('h3');
buttonTextTwo.style = 'color: white; font-family: `Kanit`, sans-serif; font-size: 18px; font-weight: 600; letter-spacing: 2.6px;';
buttonTextTwo.innerHTML = 'No';
buttonTwo.appendChild(buttonTextTwo);

//button Hover functionality 

buttonTwo.addEventListener('mouseover', function(){
    buttonTwo.style.background = 'rgb(226, 32, 32)';
})

buttonTwo.addEventListener('mouseleave', function(){
    buttonTwo.style.background = 'rgb(70, 66, 82)'
})




//Delay popup on load
window.addEventListener('load', function(){
    this.setTimeout(function(){
        popup.style.display = 'flex'
    }, 1000);
});









//Create time input div
// const timeBox = document.createElement('div');
// timeBox.style = 'display: flex; align-items: center; margin-bottom: 10px;';
// textBox.appendChild(timeBox);
// timeBox.classList.add('time');

// //Create Label in timeBox
// const timeLabel = document.createElement('label');
// timeLabel.setAttribute('for', 'number');
// timeLabel.innerHTML = 'How much time?';
// timeLabel.style = 'font-size: 14px; margin-right: 5%;';
// timeBox.appendChild(timeLabel);

// //Create input in timeBox
// const timeInput = document.createElement('input');
// timeInput.setAttribute('id', 'number');
// timeInput.setAttribute('type', 'number');
// timeInput.setAttribute('value', '25');
// timeInput.style = 'width: 25%; font-size: 12px;';
// timeBox.appendChild(timeInput);

// //Create task input div
// const taskBox = document.createElement('div');
// taskBox.style = 'display: flex; flex-direction: column; flex-wrap: wrap;';
// textBox.appendChild(taskBox);
// taskBox.classList.add('task');

// //Create task label in taskBox
// const taskLabel = document.createElement('label');
// taskLabel.setAttribute('for', 'input');
// taskLabel.innerHTML = 'What task do you need to accomplish afterwards?';
// taskLabel.style = 'font-size: 14px; line-height: 17px; margin-bottom: 15px;';
// taskBox.appendChild(taskLabel);


// //Create task text area in taskBox
// const taskText = document.createElement('textarea');
// taskText.setAttribute('id', 'input');
// taskText.setAttribute('name', 'userInput');
// taskText.setAttribute('rows', '4');
// taskText.setAttribute('cols', '5');
// taskText.setAttribute('maxlength', '200');
// taskText.setAttribute('wrap', 'hard');
// taskText.setAttribute('placeholder', 'Walk Mr. Chewbarka');
// taskText.style = 'width: 80%; font-size: 13px; padding-top: 5px; padding-left: 3%;';
// taskBox.appendChild(taskText);
