const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');


const onInputChange = () => {
    console.log(input.value);
    
    span.style.fontSize = input.value + "px";
}


input.addEventListener('input', onInputChange);