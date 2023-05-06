const form = document.getElementById('form')
const Username = document.getElementById('Username')
const Email = document.getElementById('Email')
const Password = document.getElementById('Password')
const confirm_password = document.getElementById('confirm_password')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    checkInputs()
})

function checkInputs() {
    // get the values from the inputs
    const usernameValue = Username.value.trim()
    const emailValue = Email.value.trim()
    const passwordValue = Password.value.trim()
    const confirm_passwordValue = confirm_password.value.trim()

    if(usernameValue ===''){
        // show error
        // add error class
        setErrorFor(Username, 'Username cannot be blank')
    } else {
        setSuccessFor(Username)
    }
    if(emailValue ===''){
        setErrorFor(Email, 'Email cannot be blank')  
    }else if(!isEmail(emailValue)){
        setErrorFor(Email, 'Email is not valid!')
    } else {
        setSuccessFor(Email)
    }
    if(passwordValue ===''){
        setErrorFor(Password, 'Password cannot be blank')
    } else {
        setSuccessFor(Password)
    }
    if(confirm_passwordValue ===''){
        setErrorFor(confirm_password, 'Password cannot be blank')
    } else if(passwordValue !== confirm_password){
        setErrorFor(confirm_password, 'Passwords do not match')
    } else {
        setSuccessFor(confirm_password)
    }

}

function setErrorFor(input, message){
    const formControl = input.parentElement // .form-control
    const small = formControl.querySelector('small')

    // add error message inside small
    small.innerText = message

    // add error class
    formControl.className = 'form-control error'
}

function setSuccessFor(input){
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

function isEmail(email){
    return /^(())/.test(email)
}