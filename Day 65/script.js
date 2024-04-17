function validateForm() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let passwordError = document.getElementById("passwordError");

    if (password !== confirmPassword) {
        passwordError.textContent = "Passwords do not match!";
        return false;
    } else {
        passwordError.textContent = "";
    }

    return true;
}
