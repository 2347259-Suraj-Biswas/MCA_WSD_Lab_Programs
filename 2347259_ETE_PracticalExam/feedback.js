const form = document.getElementById("comment-form");
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const comment1 = document.getElementById("comment");

var button = document.getElementById("submitBtn");

form.addEventListener("submit", e => {
    e.preventDefault();
    checkFullName();
    checkEmail();
    checkComment();
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
function checkComment(){
    const commentValue = comment1.value.trim();

    if (commentValue === "") {
        setErrorInput(comment1, "Comments cannot be blank!");
    }
    else{
        setSuccessInput(comment1);
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


