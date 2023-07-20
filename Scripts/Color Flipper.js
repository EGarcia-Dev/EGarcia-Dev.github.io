const colorsArray = [];
const colorsString = "";
const btn = document.getElementById('btn');
const colorDisplay = document.querySelector('.color'); 
// Had to change from 'getElementById' to 'querySelector' because former returns null
// Possibly due to HTML loading before JavaScript

// Adds 'on click' event listener to 'btn' that stores each line of CSV file into an array
// 
btn.addEventListener('click', function readCSVIntoArray(str, delimiter = '\\n') {
    const randomNumber = getRandomNumber();

    colorsArray = colorsString.split('\\n').map(function (line) {
        return line.split(delimiter);
    });

    document.body.style.backgroundColor = colorsArray[randomNumber];
    colorDisplay.textContent = colorsArray[randomNumber];
});

// Basic Random Number Generator
function getRandomNumber() {
    return Math.floor(Math.random() * colorsArray.length);
}