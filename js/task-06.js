let input = document.querySelector("#validation-input");


const lengthInput = input.getAttribute("data-length");

const aaa = () => {
    console.log(input.value.length);
    console.log(lengthInput);
    if (input.value.length == lengthInput) {
        input.classList.remove("invalid")
        input.classList.add("valid");
    } else {
        input.classList.add("invalid");
    }
}

input.addEventListener('blur', aaa);
