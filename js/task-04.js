let counterValue = 0;

const valueSpan = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementBtnHandler = () => {
  counterValue += 1;
    console.log(counterValue);
    valueSpan.textContent = counterValue;
};

const decrimentBtnHandler = () => {
    counterValue -= 1;
   console.log(counterValue);
    valueSpan.textContent = counterValue;
};


incrementBtn.addEventListener("click", incrementBtnHandler);
decrementBtn.addEventListener("click", decrimentBtnHandler);
