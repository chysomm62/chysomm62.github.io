//form validation
var firstName = document.forms['form']['firstName'];
var lastName = document.forms['form']['lastName'];
var age = document.forms['form']['age'];
var email = document.forms['form']['email'];
var passWord = document.forms['form']['password']

var first_error = document.getElementById("first_error");
var last_error = document.getElementById("last_error");
var age_error = document.getElementById("age_error");
var email_error = document.getElementById("email_error");
var pass_error = document.getElementById("pass_error");
console.log(first_error.value);

 firstName.addEventListener('textInput', first_verify);
 lastName.addEventListener('textInput', last_verify);
 age.addEventListener('textInput', age_verify);
 email.addEventListener('textInput', email_verify);
 passWord.addEventListener('textInput', pass_verify);

function validated(){
    if(firstName.value.length < 3) {
        firstName.style.border="1px solid red";
        first_error.style.display="block";
        firstName.focus();
        return false;
    }
    if(lastName.value.length < 3) {
        lastName.style.border="1px solid red";
        last_error.style.display="block";
        lastName.focus();
        return false;
    }
    if((age.value < 18)||(age.value > 40)) {
        age.style.border="1px solid red";
        age_error.style.display="block";
        age.focus();
        return false;
    }
    if(email.value.length < 8) {
        email.style.border="1px solid red";
        email_error.style.display="block";
        email.focus();
        return false;
    }
    if(passWord.value.length < 5) {
        passWord.style.border="1px solid red";
        pass_error.style.display="block";
        passWord.focus();
        return false;
    }
}

function first_verify(){
    if(firstName.value.length >= 3) {
        first_error.style.display="none";
        firstName.style.border="none";
        return true;
    }
}
function last_verify(){
    if(lastName.value.length >= 3) {
        last_error.style.display="none";
        lastName.style.border="none";
        return true;
    }
}
function age_verify(){
    if((age.value >= 16)||(age.value <=40)) {
        age_error.style.display="none";
        age.style.border="none";
        return true;
    }
}
function email_verify(){
    if(email.value.length >= 3) {
        email_error.style.display="none";
        email.style.border="none"
        return true;
    }
}
function pass_verify(){
    if(passWord.value.length >= 3) {
        pass_error.style.display="none";
        passWord.style.border="none"
        return true;
    }
}
