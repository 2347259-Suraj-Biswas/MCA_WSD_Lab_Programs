const form = document.getElementById("registration-form");
const fullname = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirmPassword");
const date = document.getElementById("dob");
var button = document.getElementById("submitBtn");

form.addEventListener("submit", e => {
    e.preventDefault();
    checkFullName();
    checkEmail();
    checkPassword();
    checkConfirmPassword();
    checkDOB();
});

function checkFullName(){
    const fullnameValue = fullname.value.trim();

    if (fullnameValue === "") {
        setErrorInput(fullname, "Name cannot be blank!");
    }
    else if (typeof fullnameValue !== 'string') {
        setErrorInput(fullname, "Name should contain only alphabets!");
    }
    else if (fullnameValue.length < 3) {
        setErrorInput(fullname, "Name must be atleast 3 characters long!");
    }
    else if (/^[a-zA-Z\s]+$/.test(fullnameValue)) {
        setSuccessInput(fullname);
    }
    else {
        setErrorInput(fullname, "Invalid name!");
    }  
}

function checkEmail(){
    const emailValue = email.value.trim();

    if (emailValue === "") {
        setErrorInput(email, "Email cannot be blank!");
    }
    else if (validateEmail(emailValue)) {
        setSuccessInput(email);
    }
    else {
        setErrorInput(email, "Invalid email!");
    } 
}

function checkPassword(){
    const passwordValue = password.value.trim();

    if (passwordValue === "") {
        setErrorInput(password, "Password cannot be blank!");
    }
    else if (passwordValue.length < 8) {
        setErrorInput(password, "Password must be at least 8 characters long!");
    }
    else if (!/[a-zA-Z]/.test(passwordValue)) {
        setErrorInput(password, "Password must contain at least one letter!");
    }
    else if (!/\d/.test(passwordValue)) {
        setErrorInput(password, "Password must contain at least one digit!");
    }
    else {
        setSuccessInput(password);
    }
}

function checkConfirmPassword(){
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (password2Value === "") {
        setErrorInput(password2, "Confirm Password cannot be blank!");
    } else if (password2Value !== passwordValue) {
        setErrorInput(password2, "Password's do not match!");
    } else {
        setSuccessInput(password2);
    }
}

function checkDOB(){
    const dateValue = date.value.trim();
    const dob = new Date(date.value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();

    if (dateValue === "") {
        setErrorInput(date, "DOB cannot be blank!");
    }
    else if (!/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
        setErrorInput(date, "Date of birth must be in YYYY-MM-DD format!");
    }
    else if (age < 18) {
        setErrorInput(date, "You must be at least 18 years old to submit this form!");
        button.disabled = true;
    }
    else {
        setSuccessInput(date);
        button.disabled = false;
    }
}


function setErrorInput(input, errorMessage) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = errorMessage;
    formControl.className = "form-group error";
}

function setSuccessInput(input) {
    const formControl = input.parentElement;
    formControl.className = "form-group success";
}

function validateEmail(email) {
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(String(email).toLocaleLowerCase());
}


