const form = document.querySelector('.login-form')


form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;
   if (mail === "" || password === "") {
       return alert('Все поля должны быть заполнены');
    };
    
    
    //document.getElementById('form').reset();


    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
        console.log('name', name);
        console.log('value', value);
        
    });
    
}
