// Data login (username & password)
const validUsername = "admin";
const validPassword = "12345";

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("alumni-container").style.display = "block";
    } else {
        document.getElementById("login-error").innerText = "Username atau password salah!";
    }
}
