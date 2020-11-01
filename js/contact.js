'use strict';

(function () {
let sendForm = document.querySelector('.button-form');
let form = document.querySelector ('.contact-form');
let nameOf = document.querySelector('.form-name');
let mailOf = document.querySelector ('.form-mail');
let message = document.querySelector ('#exampleFormControlTextarea1');


sendForm.addEventListener('click', function(e){

let sendName = nameOf.value;
let sendMail = mailOf.value;
let sendMessage = message.value;
alert(`${sendName} ${sendMail} написал: ${sendMessage}`);
form.reset();
e.preventDefault();
})
})();
