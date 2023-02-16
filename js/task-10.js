function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divParants = document.querySelector('#controls');
console.log(divParants);
const input = divParants.firstElementChild;

const inputValue.textContent = input.value;

const incrementBtnHandler = () => {
  
  console.log(inputValue.textContent);
};

const btnCreat = document.querySelector('[data-create]');
console.log(btnCreat);
btnCreat.addEventListener('click', incrementBtnHandler)

function arrayFunction () {
  
}