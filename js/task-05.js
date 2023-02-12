const refs = {
    input: document.querySelector("#name-input"),
    nameSpan: document.querySelector("#name-output"), 
}


const onInputChange = (event) => {
   if (event.target.value === "") {
       refs.nameSpan.textContent = 'Anonymous';
   } else {
      refs.nameSpan.textContent = event.target.value;
   }
};
refs.input.addEventListener('input', onInputChange);