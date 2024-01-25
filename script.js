const pass = document.querySelector('#password');
const confPass = document.querySelector("#confirm-password");


function confirmPassword(password) {
    password = pass.value;

    if (password !== confPass.value) {
        alert("Passwords Do Not Match.");
    }

}

const btn = document.querySelector('button');

btn.addEventListener('click', event => {
    confirmPassword();
})


function checkPasswords(){
    
    if (pass.value !== confPass.value) {
        pass.parentNode.appendChild(errorMessage);
    } else {
        pass.parentNode.removeChild(errorMessage);
    }
}

let errorMessage = document.createElement("div");
errorMessage.textContent = "* Passwords do not match";
errorMessage.style.color = "red";
errorMessage.style.fontFamily = `"Caveat", cursive, Arial, Helvetica, sans-serif;`;
errorMessage.style.fontSize = "1rem";
errorMessage.style.marginLeft = "";

pass.addEventListener('input', checkPasswords);
confPass.addEventListener('input', checkPasswords);

