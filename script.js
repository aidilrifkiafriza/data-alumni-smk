function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Simpan data login (hanya contoh, tidak aman untuk produksi)
    const validUser = "admin";
    const validPass = "12345";

    if (username === validUser && password === validPass) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html"; // Arahkan ke dashboard
    } else {
        document.getElementById("error-message").innerText = "Username atau password salah!";
    }
}
