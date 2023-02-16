let rest;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 
}

 console.log(getRandomHexColor());

const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const span = document.querySelector('.color');


const onColorChange = () => {
  
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
console.log(span.textContent);

}

button.addEventListener("click", onColorChange);

 