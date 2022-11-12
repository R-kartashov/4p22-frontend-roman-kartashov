'use strict';

const button = document.querySelector('.registration-card__button');

button.addEventListener('click', (event) => {
    event.preventDefault();

    // ----- create person ----- //

    const person = new Object();

    // ----- for input Email ----- //

    const email = document.querySelector('.registration-card__input-email').value;
    const inputEmail = document.querySelector('.registration-card--error-email');
    const fillEmail = document.querySelector('.registration-card__required-to-fill-email');
    const incorrectEmail = document.querySelector('.registration-card__incorrect-input');

    // ----- for input password ----- //

    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirmation').value;
    const inputPassword = document.querySelector('.registration-card--error-password');
    const fillPassword = document.querySelector('.registration-card__required-to-fill-password');
    const inputPasswordConfirm = document.querySelector('.registration-card--error-password-confirm');
    const notMatchConfirm = document.querySelector('.registration-card__not-match');
    const lengthPassword = document.querySelector('.registration-card__password-length');

    // ----- validation Email ----- //

    if (email.length === 0) {
        inputEmail.style.borderColor = 'rgba(238, 36, 36, 1)';
        fillEmail.style.display = 'block';
        incorrectEmail.style.display = 'none';
    }
    if (!validateEmail(email) && email.length >= 1) {
        incorrectEmail.style.display = 'block';
        inputEmail.style.borderColor = 'rgba(238, 36, 36, 1)';
        fillEmail.style.display = 'none';
    }
    if (validateEmail(email)) {
        inputEmail.style.borderColor = '#787878';
        incorrectEmail.style.display = 'none';
        fillEmail.style.display = 'none';
        person.email = email;
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // ----- validation password ----- //

    if (password !== passwordConfirm) {
        inputPassword.style.borderColor = 'rgba(238, 36, 36, 1)';
        inputPasswordConfirm.style.borderColor = 'rgba(238, 36, 36, 1)';
        notMatchConfirm.style.display = 'block';
        fillPassword.style.display = 'none';
    }
    if (password === '') {
        inputPassword.style.borderColor = 'rgba(238, 36, 36, 1)';
        fillPassword.style.display = 'block';
    }
    if (passwordConfirm.length === 0) {
        inputPasswordConfirm.style.borderColor = 'rgba(238, 36, 36, 1)';
        notMatchConfirm.style.display = 'block';
    }
    if (password.length > 0 && password.length < 8) {
        inputPassword.style.borderColor = 'rgba(238, 36, 36, 1)';
        lengthPassword.style.display = 'block';
        notMatchConfirm.style.display = 'none';
    }
    if (password.length >= 8 || password.length === 0) {
        lengthPassword.style.display = 'none';
    }
    if (password.length >= 8 && password === passwordConfirm) {
        inputPassword.style.borderColor = '#787878';
        inputPasswordConfirm.style.borderColor = '#787878';
        notMatchConfirm.style.display = 'none';
        fillPassword.style.display = 'none';
        person.password = password;
        person.passwordConfirm = passwordConfirm;
    }

    const getGender = () => {
        const man = document.getElementById('man');
        const woman = document.getElementById('woman');
        if (man.checked) {
            person.sex = 'MAN';
        } else if (woman.checked) {
            person.sex = 'WOMAN';
        }
    };

    const getComment = () => {
        const comment = document.getElementById('comment');
        person.comment = comment.value;
    };

    const getCheckbox = () => {
        const check = document.getElementById('checkbox');
        if (check.checked) {
            person.checkbox = true;
        } else {
            person.checkbox = false;
        }
    };

    const getData = () => {
        getGender();
        getComment();
        getCheckbox();
    };

    // ----- validation Email and password ----- //

    if (validateEmail(email) && password.length >= 8 && password === passwordConfirm) {
        getData();
        console.log(person);
    }
});